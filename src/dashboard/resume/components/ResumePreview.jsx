import React, { useContext } from "react";
import PersonalDetailPreview from "./preview/PersonalDetailPreview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import ExperiencePreview from "./preview/ExperiencePreview";
import SummeryPreview from "./preview/SummeryPreview";
import EducationalPreview from "./preview/EducationalPreview";
import SkillsPreview from "./preview/SkillsPreview";

const ResumePreview = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
    style={{
        borderColor:resumeInfo?.themeColor
    }}>
      {/* PersonalDetailPreview */}
      <PersonalDetailPreview resumeInfo={resumeInfo} />
      {/* Summery  */}
      <SummeryPreview resumeInfo={resumeInfo} />
      {/* Professional Experience  */}
      <ExperiencePreview resumeInfo={resumeInfo} />
      {/* Educational  */}
      <EducationalPreview resumeInfo={resumeInfo} />
      {/* Skilss  */}
      <SkillsPreview resumeInfo={resumeInfo} />
    </div>
  );
};

export default ResumePreview;
