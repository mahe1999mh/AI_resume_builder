import React, { useEffect, useState } from "react";
import AddResume from "./components/addResume";
import ResumeCardItem from "./components/ResumeCardItem";
import { useUser } from "@clerk/clerk-react";
import GlobalApi from "../../service/GlobalApi";
import dummy from "@/data/dummy";

const Dashboard = () => {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);
  useEffect(() => {
    user && GetResumesList();
  }, [user]);

  /**
   * Used to Get Users Resume List
   */
  const GetResumesList = () => {
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then(
      resp => {
        console.log(resp, "mhrloading");
        setResumeList(resp.data ?? dummy);
      }
    );
  };
  return (
    <div className="p-10 md:px-20 lg:px32">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p>Start Creating AI resume to your Next Job Roal</p>
      <div
        className="grid grid-cols-2 
      md:grid-cols-3 lg:grid-cols-5 gap-5
      mt-10"
      >
        <AddResume />
        {resumeList?.map((resume, index) => (
          <ResumeCardItem
            resume={resume}
            key={index}
            refreshData={GetResumesList}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
