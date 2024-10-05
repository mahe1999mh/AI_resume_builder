import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUpdateResumeDetailMutation } from "@/redux/resume/resumeApi";
import { LoaderCircle } from "lucide-react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import TextEditor from "@/components/custom/RichTextEditor";

const Projects = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [post, postState] = useUpdateResumeDetailMutation();
  const params = useParams();
  const [projectList, setProjectList] = useState(resumeInfo?.projects || []);

  // Add a new project entry to the list
  const addNewProject = () => {
    setProjectList(prev => [
      ...prev,
      { title: "", startDate: "", endDate: "", summary: "" },
    ]);
  };

  // Remove the last project entry from the list, preventing deletion of the last project
  const removeProject = () => {
    setProjectList(prevList =>
      prevList.length > 1 ? prevList.slice(0, -1) : prevList
    );
  };

  // Handle input changes for project fields
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setProjectList(prev =>
      prev.map((item, i) => (i === index ? { ...item, [name]: value } : item))
    );
  };

  const useDebounce = (callback, delay) => {
    const timer = useRef();

    const debouncedCallback = (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    };

    return debouncedCallback;
  };

  // Handle changes in the rich text editor
  const handleEditorChange = useDebounce((value, index) => {
    setProjectList(prev =>
      prev.map((item, i) => (i === index ? { ...item, summary: value } : item))
    );
  }, 10);

  // Save project list to the server
  const onSave = async () => {
    const hasErrors = projectList.some(
      project => !project.title || !project.startDate
    );

    if (hasErrors) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const data = { projects: [...projectList] };
      await post({ id: params.resumeId, data }).unwrap();
      alert("Projects saved successfully!");
    } catch (error) {
      alert("Error saving projects. Please try again.");
    }
  };

  // Load existing project data from resumeInfo on component mount
  useEffect(() => {
    if (resumeInfo?.projects?.length > 0) {
      setProjectList(resumeInfo.projects);
    }
  }, [resumeInfo]);

  // Update resumeInfo only when projectList changes
  useEffect(() => {
    setResumeInfo(prev => ({
      ...prev,
      projects: projectList,
    }));
  }, [projectList, setResumeInfo]);

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Projects</h2>
      <p>Add Your Projects details</p>

      {projectList.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg"
        >
          <div className="col-span-2">
            <label>Project Name</label>
            <Input
              name="title"
              value={item.title || ""}
              onChange={e => handleChange(e, index)}
            />
          </div>
          <div>
            <label>Start Date</label>
            <Input
              type="date"
              name="startDate"
              value={item.startDate || ""}
              onChange={e => handleChange(e, index)}
            />
          </div>
          <div>
            <label>End Date</label>
            <Input
              type="date"
              name="endDate"
              value={item.endDate || ""}
              onChange={e => handleChange(e, index)}
            />
          </div>
          <div className="col-span-2">
            <label>Description</label>
            <TextEditor
              onTextEditorChange={value => handleEditorChange(value, index)}
              defaultValue={item.summary || ""}
            />
          </div>
        </div>
      ))}

      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={addNewProject}
            className="text-primary"
          >
            + Add More Experience
          </Button>
          <Button
            variant="outline"
            onClick={removeProject}
            className="text-primary"
          >
            - Remove
          </Button>
        </div>
        <Button disabled={postState?.isLoading} onClick={onSave}>
          {postState?.isLoading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            "Save"
          )}
        </Button>
      </div>
    </div>
  );
};

export default Projects;
