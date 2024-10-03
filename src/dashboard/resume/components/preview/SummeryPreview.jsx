import React from "react";

function SummeryPreview({ resumeInfo }) {
  console.log(resumeInfo, "sldk");
  if (!resumeInfo) return null;
  return <p className="text-xs text-justify">{resumeInfo?.summary ?? ""}</p>;
}

export default SummeryPreview;
