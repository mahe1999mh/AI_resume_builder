import React, { useContext } from "react";
import PersonalDetailPreview from "./preview/PersonalDetailPreview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import ExperiencePreview from "./preview/ExperiencePreview";
import SummeryPreview from "./preview/SummeryPreview";
import EducationalPreview from "./preview/EducationalPreview";
import SkillsPreview from "./preview/SkillsPreview";
import html2pdf from "html2pdf.js";

const ResumePreview = () => {
  const { resumeInfo } = useContext(ResumeInfoContext);
  if (!resumeInfo) return null;

  const generatePdf = () => {
    const element = document.getElementById("content");

    // Configuration for A4 size
    const options = {
      margin: [0, 0, 0, 0],
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(element).set(options).save();
  };

  return (
    <>
      <div
        className="shadow-lg h-full p-14 border-t-[20px]"
        id="content"
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      >
        {/* PersonalDetailPreview */}
        <PersonalDetailPreview resumeInfo={resumeInfo} />
        {/* Summery  */}
        <SummeryPreview resumeInfo={resumeInfo} />
        {/* Professional Experience  */}
        <ExperiencePreview resumeInfo={resumeInfo} />
        {/* Educational  */}
        <EducationalPreview resumeInfo={resumeInfo} />
        {/* Skills  */}
        <SkillsPreview resumeInfo={resumeInfo} />
      </div>
      <button onClick={generatePdf}>Generate A4 PDF</button>
    </>
  );
};

export default ResumePreview;
