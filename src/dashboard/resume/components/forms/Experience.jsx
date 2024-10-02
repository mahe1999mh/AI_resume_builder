import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useContext, useEffect, useState } from "react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useParams } from "react-router-dom";
import { LoaderCircle } from "lucide-react";
import RichTextEditor from "../RichTextEditor";
import { useUpdateResumeDetailMutation } from "@/redux/resume/resumeApi";

const formField = {
  title: "",
  companyName: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  workSummary: "",
};

function Experience() {
  const [experienceList, setExperienceList] = useState([]);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [post, postState] = useUpdateResumeDetailMutation();
  const params = useParams();

  useEffect(() => {
    if (resumeInfo?.experience?.length > 0) {
      setExperienceList(resumeInfo.experience);
    }
  }, [resumeInfo]);

  // Handle input changes
  const handleChange = (index, event) => {
    const { name, value } = event.target;
    setExperienceList(prevList =>
      prevList.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      )
    );
  };

  // Add new experience entry
  const addNewExperience = () => {
    setExperienceList([...experienceList, { ...formField }]);
  };

  // Remove the last experience entry
  const removeExperience = () => {
    setExperienceList(prevList => prevList.slice(0, -1));
  };

  // Handle rich text editor changes
  const handleRichTextEditor = (value, name, index) => {
    setExperienceList(prevList =>
      prevList.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      )
    );
  };

  // Sync experience list with resumeInfo context
  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      experience: experienceList,
    });
  }, [experienceList]);

  // Save the data to the backend
  const onSave = () => {
    const data = {
      experience: experienceList.map(({ id, ...rest }) => rest),
    };
    post({ id: params.resumeId, data });
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Professional Experience</h2>
      <p>Add Your previous Job experience</p>

      <div>
        {experienceList.map((item, index) => (
          <div key={index}>
            <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
              <div>
                <label className="text-xs">Position Title</label>
                <Input
                  name="title"
                  value={item.title || ""}
                  onChange={event => handleChange(index, event)}
                />
              </div>
              <div>
                <label className="text-xs">Company Name</label>
                <Input
                  name="companyName"
                  value={item.companyName || ""}
                  onChange={event => handleChange(index, event)}
                />
              </div>
              <div>
                <label className="text-xs">City</label>
                <Input
                  name="city"
                  value={item.city || ""}
                  onChange={event => handleChange(index, event)}
                />
              </div>
              <div>
                <label className="text-xs">State</label>
                <Input
                  name="state"
                  value={item.state || ""}
                  onChange={event => handleChange(index, event)}
                />
              </div>
              <div>
                <label className="text-xs">Start Date</label>
                <Input
                  type="date"
                  name="startDate"
                  value={item.startDate || ""}
                  onChange={event => handleChange(index, event)}
                />
              </div>
              <div>
                <label className="text-xs">End Date</label>
                <Input
                  type="date"
                  name="endDate"
                  value={item.endDate || ""}
                  onChange={event => handleChange(index, event)}
                />
              </div>
              <div className="col-span-2">
                <RichTextEditor
                  index={index}
                  defaultValue={item?.workSummary || ""}
                  onRichTextEditorChange={value =>
                    handleRichTextEditor(value, "workSummary", index)
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={addNewExperience}
            className="text-primary"
          >
            + Add More Experience
          </Button>
          <Button
            variant="outline"
            onClick={removeExperience}
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
}

export default Experience;
