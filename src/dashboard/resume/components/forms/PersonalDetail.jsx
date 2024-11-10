import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { LoaderCircle } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUpdateResumeDetailMutation } from "@/redux/resume/resumeApi";

function PersonalDetail() {
  const params = useParams();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [post, postState] = useUpdateResumeDetailMutation();

  // Initialize formData with default structure to avoid undefined errors
  const [formData, setFormData] = useState({
    personal: {
      address: "",
      email: "",
      firstName: "",
      lastName: "",
      github: "",
      isExperience: true,
      jobTitle: "",
      linkedin: "",
      phone: "",
    },
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (resumeInfo) {
      // Set form data with resumeInfo if available
      setFormData((prevData) => ({
        ...prevData,
        personal: {
          ...resumeInfo?.personal,
          isExperience:
            resumeInfo?.personal?.isExperience !== undefined
              ? resumeInfo.personal.isExperience
              : true,
        },
      }));
    }
  }, [resumeInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      personal: {
        ...prevFormData.personal,
        [name]: value,
      },
    }));

    setResumeInfo((prevResumeInfo) => ({
      ...prevResumeInfo,
      personal: {
        ...prevResumeInfo?.personal,
        [name]: value,
      },
    }));
  };

  const onSave = (e) => {
    e.preventDefault();
    const data = { personal: formData.personal };
    post({ id: params.resumeId, data });
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Personal Detail</h2>
      <p>Get Started with the basic information</p>

      <form onSubmit={onSave}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div>
            <label className="text-sm">First Name</label>
            <Input
              name="firstName"
              defaultValue={resumeInfo?.personal?.firstName || ""}
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Last Name</label>
            <Input
              name="lastName"
              onChange={handleInputChange}
              defaultValue={resumeInfo?.personal?.lastName || ""}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Job Title</label>
            <Input
              name="jobTitle"
              defaultValue={resumeInfo?.personal?.jobTitle || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <div className="flex gap-4 mt-2">
              <label className="flex items-center">
                <Input
                  type="radio"
                  name="isExperience"
                  value="fresher"
                  checked={!formData.personal.isExperience}
                  onChange={() =>
                    handleInputChange({
                      target: { name: "isExperience", value: false },
                    })
                  }
                />
                <span className="ml-2">Fresher</span>
              </label>
              <label className="flex items-center">
                <Input
                  type="radio"
                  name="isExperience"
                  value="experienced"
                  checked={formData.personal.isExperience}
                  onChange={() =>
                    handleInputChange({
                      target: { name: "isExperience", value: true },
                    })
                  }
                />
                <span className="ml-2">Experienced</span>
              </label>
            </div>
          </div>
          <div className="col-span-2">
            <label className="text-sm">City</label>
            <Input
              name="address"
              required
              defaultValue={resumeInfo?.personal?.address || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Phone</label>
            <Input
              name="phone"
              required
              defaultValue={resumeInfo?.personal?.phone || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <Input
              name="email"
              required
              defaultValue={resumeInfo?.personal?.email || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">LinkedIn Profile</label>
            <Input
              name="linkedin"
              defaultValue={resumeInfo?.personal?.linkedin || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">GitHub Profile</label>
            <Input
              name="github"
              defaultValue={resumeInfo?.personal?.github || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <Button type="submit" disabled={postState?.isLoading}>
            {postState?.isLoading ? (
              <div className="flex justify-center">
                <LoaderCircle className="animate-spin" />
              </div>
            ) : (
              "Save"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetail;
