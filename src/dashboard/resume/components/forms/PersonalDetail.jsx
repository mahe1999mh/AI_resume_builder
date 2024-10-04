import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { LoaderCircle } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetUserResumesQuery,
  useUpdateResumeDetailMutation,
} from "@/redux/resume/resumeApi";
import { useUser } from "@clerk/clerk-react";
import { useDispatch } from "react-redux"; // Import useDispatch
import { updatePersonalDetail } from "@/redux/resume/resumeSlice"; // Import the action

function PersonalDetail() {
  const params = useParams();
  const { user } = useUser();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [post, postState] = useUpdateResumeDetailMutation();
  const getResumesData = useGetUserResumesQuery(
    user?.primaryEmailAddress?.emailAddress
  );

  const dispatch = useDispatch(); // Initialize dispatch
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    themeColor: "",
    isExperience: true,
    address: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
  });

  useEffect(() => {
    if (getResumesData?.isSuccess) {
      setFormData(getResumesData?.data?.[0]?.personal ?? {});
    }
  }, [getResumesData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const isRadio = e.target.type === "radio";
    const newValue = isRadio ? value === "true" : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));

    setResumeInfo((prevResumeInfo) => ({
      ...prevResumeInfo,
      [name]: newValue,
    }));
  };

  const onSave = (e) => {
    e.preventDefault();
    const data = {
      personal: {
        ...formData,
      },
    };

    // Dispatch the action to update personal details in Redux store
    dispatch(updatePersonalDetail(data.personal));

    // Update the resume detail via the API
    post({ id: params?.resumeId, data });
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
              value={formData?.firstName}
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Last Name</label>
            <Input
              name="lastName"
              required
              value={formData?.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Job Title</label>
            <Input
              name="jobTitle"
              required
              value={formData?.jobTitle}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Experience Level</label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center">
                <Input
                  type="radio"
                  name="isExperience"
                  value="true" // String value
                  checked={formData.isExperience === true} // Check if it's true
                  onChange={handleInputChange}
                />
                <span className="ml-2">Fresher</span>
              </label>
              <label className="flex items-center">
                <Input
                  type="radio"
                  name="isExperience"
                  value="false" // String value
                  checked={formData.isExperience === false} // Check if it's false
                  onChange={handleInputChange}
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
              value={formData?.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Phone</label>
            <Input
              name="phone"
              required
              value={formData?.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <Input
              name="email"
              required
              value={formData?.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">LinkedIn Profile</label>
            <Input
              name="linkedin"
              value={formData?.linkedin}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">GitHub Profile</label>
            <Input
              name="github"
              value={formData?.github}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <Button type="submit" disabled={postState?.isLoading}>
            {postState?.isLoading ? (
              <LoaderCircle className="animate-spin" />
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
