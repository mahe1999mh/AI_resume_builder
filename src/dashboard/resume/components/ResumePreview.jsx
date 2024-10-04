import React, { useContext, useEffect } from "react";
import PersonalDetailPreview from "./preview/PersonalDetailPreview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import ExperiencePreview from "./preview/ExperiencePreview";
import SummeryPreview from "./preview/SummeryPreview";
import EducationalPreview from "./preview/EducationalPreview";
import SkillsPreview from "./preview/SkillsPreview";
import html2pdf from "html2pdf.js";
import ProjectPreview from "./preview/ProjectPreview";
import { useUser } from "@clerk/clerk-react";
import { useGetUserResumesQuery } from "@/redux/resume/resumeApi";
import { useDispatch } from "react-redux";
import { updatePersonalDetail } from "@/redux/resume/resumeSlice";

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
  // const { resumeInfo } = useContext(ResumeInfoContext);
  const { user } = useUser();
  const {
    data: resumeInfo,
    isLoading,
    isFetching,
  } = useGetUserResumesQuery(user?.primaryEmailAddress?.emailAddress);
  const dispatch = useDispatch();

  useEffect(() => {
    if (resumeInfo && resumeInfo?.[0]?.personal) {
      dispatch(updatePersonalDetail(resumeInfo?.[0]?.personal));
    }
  }, [resumeInfo, dispatch]);

  console.log(resumeInfo, "resumeInforesumeInfo");

  if (!resumeInfo) return null;

  return (
    <>
      <div
        className="shadow-lg h-full p-5 border-t-[20px]"
        id="content"
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      >
        {/* PersonalDetailPreview */}
        <PersonalDetailPreview />
        {/* Summery  */}
        <SummeryPreview />
        {/* Professional Experience  */}
        <ExperiencePreview resumeInfo={resumeInfo} />
        {/* Project   */}
        <ProjectPreview resumeInfo={resumeInfo} />
        {/* Educational  */}
        <EducationalPreview resumeInfo={resumeInfo} />
        {/* Skills  */}
        <SkillsPreview resumeInfo={resumeInfo} />
      </div>
    </>
  );
};

export default ResumePreview;
