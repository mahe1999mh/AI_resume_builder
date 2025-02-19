import React from "react";

function PersonalDetailPreview({ resumeInfo }) {
  if (!resumeInfo) return null;
  return (
    <div>
      <h2
        className="font-bold text-xl text-center"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h2>
      <h2 className="text-center text-sm font-medium">
        {resumeInfo?.jobTitle}
      </h2>
      <h2
        className="text-center font-normal text-xs"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        {resumeInfo?.address}
      </h2>

      {/* Flex container */}
      <div className="flex flex-wrap justify-center gap-4">
        <h2
          className="font-normal text-xs break-words"
          style={{
            color: resumeInfo?.themeColor,
          }}
        >
          {resumeInfo?.phone}
        </h2>
        <h2
          className="font-normal text-xs break-words"
          style={{
            color: resumeInfo?.themeColor,
          }}
        >
          {resumeInfo?.email}
        </h2>
        <h2
          className="font-normal text-xs break-words"
          style={{
            color: resumeInfo?.themeColor,
          }}
        >
          {resumeInfo?.linkedin}
        </h2>
        <h2
          className="font-normal text-xs break-words"
          style={{
            color: resumeInfo?.themeColor,
          }}
        >
          {resumeInfo?.github}
        </h2>
      </div>
      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
    </div>
  );
}

export default PersonalDetailPreview;
