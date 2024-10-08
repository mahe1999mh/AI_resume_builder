import React from "react";

function SkillsPreview({ resumeInfo }) {
  if (
    !resumeInfo ||
    (!resumeInfo.Skills?.technicalSkills && !resumeInfo?.Skills?.softSkills)
  )
    return null;
  if (!resumeInfo) return null;
  return (
    <div className="my-6">
      <h2 className="text-center font-bold text-sm mb-2">Skills</h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />
      {resumeInfo?.Skills?.technicalSkills &&
        resumeInfo?.Skills?.technicalSkills.length > 0 && (
          <>
            <h2
              className="font-bold text-xs mb-2 mt-1"
              style={{
                color: "#3498db",
              }}
            >
              Technical Skills
            </h2>
            <div className="grid grid-cols-6 gap-3 my-4">
              {resumeInfo?.Skills?.technicalSkills?.map((skills, index) => (
                <div key={index} className="flex items-center ">
                  <ul>
                    <li className="text-xs">{skills}</li>
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
      {resumeInfo?.Skills?.softSkills &&
        resumeInfo?.Skills?.softSkills?.length > 0 && (
          <>
            <h2
              className="font-bold text-xs mb-2 mt-1"
              style={{
                color: "#3498db",
              }}
            >
              Soft Skills
            </h2>
            <div className="grid grid-cols-6 gap-3 my-4">
              {resumeInfo?.Skills?.softSkills &&
                resumeInfo?.Skills?.softSkills?.map((skills, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <ul>
                      <li className="text-xs">{skills}</li>
                    </ul>
                  </div>
                ))}
            </div>
          </>
        )}
    </div>
  );
}

export default SkillsPreview;
