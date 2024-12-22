import React from "react";

function SkillsPreview({ resumeInfo }) {
  if (
    !resumeInfo ||
    (!resumeInfo.skills?.technicalSkills && !resumeInfo?.skills?.softSkills)
  )
    return null;
  if (!resumeInfo) return null;
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Skills
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />
      {resumeInfo?.skills?.technicalSkills &&
        resumeInfo?.skills?.technicalSkills.length > 0 && (
          <>
            <h2
              className="font-bold text-xs mb-2 mt-1"
              style={{
                color: resumeInfo?.themeColor,
              }}
            >
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-2 my-4">
              {resumeInfo?.skills?.technicalSkills?.map((skills, index) => (
                <span key={index} className="text-xs px-2 py-1 ">
                  {skills}
                </span>
              ))}
            </div>
          </>
        )}
      {resumeInfo?.skills?.softSkills &&
        resumeInfo?.skills?.softSkills?.length > 0 && (
          <>
            <h2
              className="font-bold text-xs mb-2 mt-1"
              style={{
                color: resumeInfo?.themeColor,
              }}
            >
              Soft Skills
            </h2>
            <div className="flex flex-wrap gap-2 my-4">
              {resumeInfo?.skills?.softSkills?.map((skills, index) => (
                <span key={index} className="text-xs px-2 py-1 ">
                  {skills}
                </span>
              ))}
            </div>
          </>
        )}
    </div>
  );
}

export default SkillsPreview;
