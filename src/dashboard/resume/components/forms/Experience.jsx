import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useContext, useEffect, useState } from "react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useParams } from "react-router-dom";
import GlobalApi from "./../../../../../service/GlobalApi";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import RichTextEditor from "../RichTextEditor";

const formField = {
  title: "",
  companyName: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  workSummery: "",
};

function Experience() {
  const [experinceList, setExperinceList] = useState([]);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const params = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (resumeInfo?.experience?.length > 0) {
      setExperinceList(resumeInfo?.experience);
    }
  }, [resumeInfo]);

  // Handle input changes
  const handleChange = (index, event) => {
    const newEntries = [...experinceList];
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setExperinceList(newEntries);
  };

  // Add new experience entry
  const AddNewExperience = () => {
    setExperinceList([...experinceList, { ...formField }]);
  };

  // Remove the last experience entry
  const RemoveExperience = () => {
    setExperinceList(experinceList.slice(0, -1));
  };

  // Handle rich text editor changes
  const handleRichTextEditor = (value, name, index) => {
    const newEntries = [...experinceList];
    newEntries[index][name] = value;
    setExperinceList(newEntries);
  };

  // Sync experience list with resumeInfo context
  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      experience: experinceList,
    });
  }, [experinceList]);

  // Save the data to the backend
  const onSave = () => {
    setLoading(true);
    const data = {
      experience: experinceList.map(({ id, ...rest }) => rest), // Remove `id` from each entry
    };

    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      res => {
        setLoading(false);
        toast("Details updated!");
      },
      error => {
        setLoading(false);
        toast("Error updating details");
      }
    );
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Professional Experience</h2>
        <p>Add Your previous Job experience</p>

        <div>
          {experinceList.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                <div>
                  <label className="text-xs">Position Title</label>
                  <Input
                    name="title"
                    value={item.title} // Controlled input
                    onChange={event => handleChange(index, event)}
                  />
                </div>
                <div>
                  <label className="text-xs">Company Name</label>
                  <Input
                    name="companyName"
                    value={item.companyName} // Controlled input
                    onChange={event => handleChange(index, event)}
                  />
                </div>
                <div>
                  <label className="text-xs">City</label>
                  <Input
                    name="city"
                    value={item.city} // Controlled input
                    onChange={event => handleChange(index, event)}
                  />
                </div>
                <div>
                  <label className="text-xs">State</label>
                  <Input
                    name="state"
                    value={item.state} // Controlled input
                    onChange={event => handleChange(index, event)}
                  />
                </div>
                <div>
                  <label className="text-xs">Start Date</label>
                  <Input
                    type="date"
                    name="startDate"
                    value={item.startDate} // Controlled input
                    onChange={event => handleChange(index, event)}
                  />
                </div>
                <div>
                  <label className="text-xs">End Date</label>
                  <Input
                    type="date"
                    name="endDate"
                    value={item.endDate} // Controlled input
                    onChange={event => handleChange(index, event)}
                  />
                </div>
                <div className="col-span-2">
                  <RichTextEditor
                    index={index}
                    defaultValue={item?.workSummery}
                    onRichTextEditorChange={value =>
                      handleRichTextEditor(value, "workSummery", index)
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
              onClick={AddNewExperience}
              className="text-primary"
            >
              + Add More Experience
            </Button>
            <Button
              variant="outline"
              onClick={RemoveExperience}
              className="text-primary"
            >
              - Remove
            </Button>
          </div>
          <Button disabled={loading} onClick={onSave}>
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Experience;
