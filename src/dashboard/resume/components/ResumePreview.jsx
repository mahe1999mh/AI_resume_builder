import React, { useContext } from "react";
import PersonalDetailPreview from "./preview/PersonalDetailPreview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import ExperiencePreview from "./preview/ExperiencePreview";
import SummeryPreview from "./preview/SummeryPreview";
import EducationalPreview from "./preview/EducationalPreview";
import SkillsPreview from "./preview/SkillsPreview";
import html2pdf from "html2pdf.js";
import ProjectPreview from "./preview/ProjectPreview";

export const generatePdf = () => {
  const element = document.getElementById("content");

  const options = {
    margin: [0, 0, 0, 0],
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  html2pdf().from(element).set(options).save();
};

const ResumePreview = () => {
  const { resumeInfo } = useContext(ResumeInfoContext);
  if (!resumeInfo) return null;

  return (
    <>
      <div
        className="shadow-lg h-full p-5 border-t-[20px]"
        id="content"
        style={{
          borderColor: resumeInfo?.themeColor,
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {/* PersonalDetailPreview */}
        <PersonalDetailPreview resumeInfo={resumeInfo?.personal} />
        {/* Summery  */}
        <SummeryPreview resumeInfo={resumeInfo} />
        {/* Project   */}
        <ProjectPreview resumeInfo={resumeInfo} />
        {/* Professional Experience  */}
        <ExperiencePreview resumeInfo={resumeInfo} />

        {/* Educational  */}
        <EducationalPreview resumeInfo={resumeInfo} />
        {/* Skills  */}
        <SkillsPreview resumeInfo={resumeInfo} />
      </div>
    </>
  );
};

export default ResumePreview;
