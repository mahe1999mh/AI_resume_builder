import React, { useEffect, useState } from "react";
import FormSection from "../../components/FormSection";
import ResumePreview from "../../components/ResumePreview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import dummy from "@/data/dummy";
import { useParams } from "react-router-dom";
import GlobalApi from "../../../../../service/GlobalApi";

const EditResume = () => {
  const [resumeInfo, setResumeInfo] = useState();
  const { resumeId } = useParams();
  // useEffect(()=>{
  //     console.log(dummy);
  //     setResumeInfo(dummy);
  // },[])

  const GetResume = () => {
    GlobalApi.GetResumeById(resumeId).then((resp) => {
      console.log(resp?.data);
      setResumeInfo(resp?.data ?? dummy);
      console.log(resp?.data, "mhr");
    });
  };

  useEffect(() => {
    GetResume();
  }, []);

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-1 gap-10">
        {/* FormSection */}
        <FormSection />
        {/* ResumePreview */}
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
};

export default EditResume;
