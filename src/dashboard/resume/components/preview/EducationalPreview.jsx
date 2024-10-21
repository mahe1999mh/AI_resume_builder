import React from "react";

function EducationalPreview({ resumeInfo }) {
  if (!resumeInfo || !resumeInfo.education) return null;
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Education
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />

      {resumeInfo?.education.map((education, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            {education.universityName}
          </h2>
          <h2 className="text-xs flex justify-between">
            {education?.degree} {education?.major && "-"} {education?.major}
            <span>
              {education?.startDate.slice(0, 7)} {education?.startDate && "To "}
              {education?.endDate.slice(0, 7)}
            </span>
          </h2>
          {/* <p className="text-xs my-2">{education?.description}</p> */}
          <h2 className="text-xs my-2">
            {education?.cgpa && "CGPA: "}
            <span>{education?.cgpa}</span>
          </h2>

        </div>
      ))}
    </div>
  );
}

export default EducationalPreview;
