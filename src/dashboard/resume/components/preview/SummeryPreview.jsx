import React from "react";
import { useSelector } from "react-redux";

function SummeryPreview({ resumeInfo }) {
  console.log(resumeInfo, "sldk");
  // const { fonts, fontSize, fontColor } = useSelector(state => state?.styles);
  if (!resumeInfo) return null;
  return (
    <>
      <p className="text-xs my-2 text-justify">{resumeInfo?.summary ?? ""}</p>
    </>
  );
}

export default SummeryPreview;
