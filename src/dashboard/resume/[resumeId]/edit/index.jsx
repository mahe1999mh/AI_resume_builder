import React, { useEffect, useState } from "react";
import FormSection from "../../components/FormSection";
import ResumePreview from "../../components/ResumePreview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useParams } from "react-router-dom";
import { useGetResumeByIdQuery } from "@/redux/resume/resumeApi";
import { TemplateSelector } from "./TemplateSelector";

const EditResume = () => {
  const [resumeInfo, setResumeInfo] = useState();
  const { resumeId } = useParams();

  const getResumeData = useGetResumeByIdQuery(resumeId);

  useEffect(() => {
    if (getResumeData?.isSuccess) {
      setResumeInfo(getResumeData?.data ?? []);
    }
  }, [getResumeData]);

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-1 gap-10">
        {/* FormSection */}
        <FormSection />
        {/* ResumePreview */}
        <div>
          {/* <div style={{ display: "flex", gap: "5px", paddingBottom: "5px" }}>
            <TemplateSelector />
          </div> */}
          <ResumePreview />
        </div>
      </div>
    </ResumeInfoContext.Provider>
  );
};

export default EditResume;
