import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { LoaderCircle } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "./../../../../../service/GlobalApi";
import { toast } from "sonner";

function PersonalDetail() {
  const params = useParams();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("---", resumeInfo);
    setFormData(resumeInfo);
  }, [resumeInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(formData);


    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    console.log(name, value);

    setResumeInfo((prevResumeInfo) => ({
      ...prevResumeInfo,
      [name]: value,
    }));
  };

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);

    GlobalApi.UpdateResumeDetail(params?.resumeId, formData).then(
      (resp) => {
        console.log(resp);

        setLoading(false);
        toast("Details updated");
      },
      (error) => {
        setLoading(false);
      }
    );
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
              defaultValue={resumeInfo?.firstName}
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Last Name</label>
            <Input
              name="lastName"
              required
              onChange={handleInputChange}
              defaultValue={resumeInfo?.lastName}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Job Title</label>
            <Input
              name="jobTitle"
              required
              defaultValue={resumeInfo?.jobTitle}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <div className="flex gap-4 mt-2">
              <label className="flex items-center">
                <Input
                  type="radio"
                  name="expirence"
                  value="fresher"
                  checked={resumeInfo?.expirence === 'fresher'}
                  onChange={handleInputChange}
                />
                <span className="ml-2">Fresher</span>
              </label>
              <label className="flex items-center">
                <Input
                  type="radio"
                  name="expirence"
                  value="expirenced"
                  checked={resumeInfo?.expirence === 'expirenced'}
                  onChange={handleInputChange}
                />
                <span className="ml-2">Expirence</span>
              </label>
            </div>
          </div>
          <div className="col-span-2">
            <label className="text-sm">City</label>
            <Input
              name="address"
              required
              defaultValue={resumeInfo?.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Phone</label>
            <Input
              name="phone"
              required
              defaultValue={resumeInfo?.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <Input
              name="email"
              required
              defaultValue={resumeInfo?.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">LinkedIn Profile</label>
            <Input
              name="linkedin"
              required
              defaultValue={resumeInfo?.linkedin}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="text-sm">GitHub Profile</label>
            <Input
              name="github"
              required
              defaultValue={resumeInfo?.github}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <Button type="submit" disabled={loading}>
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetail;
