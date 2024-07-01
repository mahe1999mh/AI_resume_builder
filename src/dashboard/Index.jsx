import React, { useEffect, useState } from "react";
import AddResume from "./components/addResume";
import ResumeCardItem from "./components/ResumeCardItem";
import { useUser } from "@clerk/clerk-react";
import GlobalApi from "../../service/GlobalApi";

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
      (resp) => {
        console.log(resp.data);
        setResumeList(resp.data);
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
        {resumeList?.length > 0
          ? resumeList?.map((resume, index) => (
              <ResumeCardItem
                resume={resume}
                key={index}
                refreshData={GetResumesList}
              />
            ))
          : [1, 2].map((item, index) => (
              <div
                key={index}
                className="h-[280px] w-[250px] rounded-lg bg-slate-200 animate-pulse p-4 flex flex-col space-y-4"
              >
                <div className="h-[250px] w-full bg-gray-300 rounded-md"></div>
                <div className="space-y-2">
                  <div className="h-6 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Dashboard;
