import React, { useEffect, useState } from "react";
import AddResume from "./components/addResume";
import ResumeCardItem from "./components/ResumeCardItem";
import { useUser } from "@clerk/clerk-react";
import { useGetUserResumesQuery } from "@/redux/resume/resumeApi";

const Dashboard = () => {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);

  const { data: resumes } = useGetUserResumesQuery(
    user?.primaryEmailAddress?.emailAddress
  );

  useEffect(() => {
    if (resumes) {
      setResumeList(resumes);
    }
  }, [resumes]);

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p>Start Creating AI resume for your Next Job Role</p>

      <div
        className="grid grid-cols-2 
        md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10"
      >
        <AddResume />
        {resumeList.length > 0 ? (
          resumeList.map((resume, index) => (
            <ResumeCardItem
              resume={resume}
              key={index}
              refreshData={() => setResumeList(resumes)} // Optional refresh logic
            />
          ))
        ) : (
          <p>No resumes found. Start by creating one!</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
