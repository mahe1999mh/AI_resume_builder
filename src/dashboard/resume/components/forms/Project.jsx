import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LoaderCircle } from "lucide-react";
import React, { useState } from "react";

const Projects = () => {
  const [projectList, setprojectList] = useState([
    {
      projectName: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const AddNewProject = () => {
    setprojectList(prev => [
      ...prev,
      {
        projectName: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const RemoveProject = () => {
    setprojectList(prevList => {
      const newList = [...prevList];
      newList.pop();
      return newList;
    });
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setprojectList(prev => {
      return prev.map((item, i) =>
        i == index ? { ...item, [name]: value } : item
      );
    });
  };

  return (
    <>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Projects</h2>
        <p>Add Your Projects details</p>
        <div></div>

        {projectList?.map((item, index) => (
          <>
            <div
              key={index}
              className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg"
            >
              <div className="col-span-2">
                <label>Project Name</label>
                <Input
                  name="projectName"
                  onChange={e => handleChange(e, index)}
                  defaultValue={item?.projectName}
                />
              </div>
              <div>
                <label>Start Date</label>
                <Input
                  type="date"
                  name="startDate"
                  onChange={e => handleChange(e, index)}
                  defaultValue={item?.startDate}
                />
              </div>
              <div>
                <label>End Date</label>
                <Input
                  type="date"
                  name="endDate"
                  onChange={e => handleChange(e, index)}
                  defaultValue={item?.endDate}
                />
              </div>
              <div className="col-span-2">
                <label>Description</label>
                <Textarea
                  name="description"
                  onChange={e => handleChange(e, index)}
                  defaultValue={item?.description}
                />
              </div>
            </div>
          </>
        ))}
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={AddNewProject}
              className="text-primary"
            >
              + Add More Experience
            </Button>
            <Button
              variant="outline"
              onClick={RemoveProject}
              className="text-primary"
            >
              - Remove
            </Button>
          </div>
          {/* <Button disabled={loading} onClick={onSave}>
          {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
        </Button> */}
        </div>
      </div>
    </>
  );
};

export default Projects;
