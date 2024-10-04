import React from "react";
import { useSelector } from "react-redux";

function SummeryPreview({ resumeInfo }) {
  console.log(resumeInfo, "sldk");
  const { fonts, fontSize, fontColor } = useSelector(state => state?.styles);
  if (!resumeInfo) return null;
  return (
    <>
      <p
        className="text-xs text-justify"
        style={{ fontFamily: fonts, fontSize, color: fontColor }}
      >
        {resumeInfo?.summary ?? ""}
      </p>
    </>
  );
}

export default SummeryPreview;
