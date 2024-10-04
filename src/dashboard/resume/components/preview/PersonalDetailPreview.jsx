import React from "react";
import { useSelector } from "react-redux";

function PersonalDetailPreview() {
  const resumeInfo = useSelector((store) => store?.resume?.personal);

  if (!resumeInfo) return null;
  return (
    <div>
      <h2 className="font-bold text-xl text-center">
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h2>
      <h2 className="text-center text-sm font-medium">
        {resumeInfo?.jobTitle}
      </h2>
      <h2 className="text-center font-normal text-xs">{resumeInfo?.address}</h2>

      <div className="flex justify-between">
        <h2 className="font-normal text-xs">{resumeInfo?.phone}</h2>
        <h2 className="font-normal text-xs">{resumeInfo?.email}</h2>
        {resumeInfo?.linkedin != "" && <h2 className="font-normal text-xs">{resumeInfo?.linkedin}</h2>}
        {resumeInfo?.github != "" && <h2 className="font-normal text-xs">{resumeInfo?.github}</h2>}
      </div>
      <hr className="border-[0.5px] my-2" />
    </div>
  );
}

export default PersonalDetailPreview;
