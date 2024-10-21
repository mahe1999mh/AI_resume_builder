import React from "react";

function ExperiencePreview({ resumeInfo }) {
  console.log((resumeInfo));

  if (!resumeInfo || !resumeInfo?.personal?.isExperience) return null;
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Professional Experience
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />

      {resumeInfo?.experience?.map((experience, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            {experience?.title}
          </h2>
          <h2 className="text-sx flex justify-between">
            {experience?.companyName &&
              `${experience?.companyName}, ${experience?.city}, ${experience?.state}`}

            <span className="text-xs font-normal">
              {experience?.startDate.slice(0, 7)}
              {experience?.startDate && " To "}
              {experience?.currentlyWorking
                ? "Present"
                : experience?.endDate.slice(0, 7)}
            </span>
          </h2>

          <div
            className="text-xs my-2 text-justify"
            dangerouslySetInnerHTML={{ __html: experience?.workSummary }}
          />
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;
