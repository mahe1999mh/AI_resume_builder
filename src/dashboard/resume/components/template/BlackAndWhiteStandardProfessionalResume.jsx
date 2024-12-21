import React from "react";

const BlackAndWhiteStandardProfessionalResume = () => {
  const resumeData = {
    personal: {
      themeColor: "#000000",
      firstName: "Mahendra",
      lastName: "Reddy BJ",
      jobTitle: "Frontend Developer",
      address: "50 vidyanagara cross bangalore",
      phone: "+123 456 7890",
      email: "mahendra@example.com",
      github: "mahendra@example.com",
      linkedin: "LinkedIn",
    },
    skills: {
      technicalSkills: ["ReactJS", "NodeJS", "HTML", "CSS"],
      softSkills: ["Communication", "TeamWork", "Problem-Solving"],
    },
    projects: [
      {
        title: "Todo List Application",
        summary:
          "<li>Developed a dynamic Todo List in React with features such as task categorization, inline editing, and responsive design.</li><li>Enhanced the app by integrating audit logging functionality to track changes in task names.</li>",
      },
      {
        title: "ATS Resume Builder",
        summary:
          "<li>Built an ATS-compliant resume builder that allows users to customize their resumes based on job description parsing.</li><li>Integrated LinkedIn and GitHub links, and implemented theme color customization for personalized resume designs.</li>",
      },
    ],
    experience: [
      {
        title: "Frontend Developer | BreakoutStock",
        companyName: "Relyon Softech Ltd",
        city: "Bangalore",
        state: "karnataka",
        workSummary:
          "<li>Developed interactive features to enhance the user experience of a stock management platform.</li><li>Collaborated with designers to implement pixel-perfect UI using React.js and Material-UI.</li>",
      },
    ],
    education: [
      {
        universityName: "Bachelor of Technology in Computer Science",
        degree: "BCA",
        description: "CGP : 8.8",
      },
    ],
  };

  const createMarkup = html => {
    return { dangerouslySetInnerHTML: { __html: html } };
  };

  return (
    <div className="bg-gray-100 ">
      <div
        className="w-[210mm] min-h-[297mm] mx-auto bg-white shadow-lg"
        style={{
          padding: "5mm 5mm",
        }}
      >
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold mb-1">
            {`${resumeData.personal.firstName} ${resumeData.personal.lastName}`}
          </h1>
          <div className="text-gray-600 mb-2 flex flex-wrap gap-4 text-sm">
            <span>{resumeData.personal.email}</span>
            <span>{resumeData.personal.phone}</span>
            <span>{resumeData.personal.address}</span>
          </div>
          <h2 className="text-lg font-bold mb-2">
            {resumeData.personal.jobTitle}
          </h2>
          <div className="flex gap-4 text-sm">
            {resumeData.personal.github && (
              <a
                href={`https://github.com/${resumeData.personal.github}`}
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
            {resumeData.personal.linkedin && (
              <a
                href={resumeData.personal.linkedin}
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            )}
          </div>
        </header>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-base font-bold mb-3 bg-gray-200 p-2">SKILLS</h2>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Technical Skills</h3>
              <div className="grid gap-1">
                {resumeData.skills.technicalSkills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <span className="mr-2">•</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Soft Skills</h3>
              <div className="grid gap-1">
                {resumeData.skills.softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <span className="mr-2">•</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-base font-bold mb-3 bg-gray-200 p-2">
            WORK EXPERIENCE
          </h2>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-4 text-sm">
              <div className="mb-1">
                <div className="font-semibold">{exp.title}</div>
                <div className="text-gray-600">
                  {exp.companyName} | {exp.city}, {exp.state}
                </div>
              </div>
              <ul
                className="list-disc ml-5"
                {...createMarkup(exp.workSummary)}
              />
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-base font-bold mb-3 bg-gray-200 p-2">PROJECTS</h2>
          {resumeData.projects.map((project, index) => (
            <div key={index} className="mb-4 text-sm">
              <div className="font-semibold mb-1">{project.title}</div>
              <ul
                className="list-disc ml-5"
                {...createMarkup(project.summary)}
              />
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-base font-bold mb-3 bg-gray-200 p-2">
            EDUCATION
          </h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4 text-sm">
              <div className="font-semibold">{edu.universityName}</div>
              <div>{edu.degree}</div>
              <div className="text-gray-600">{edu.description}</div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default BlackAndWhiteStandardProfessionalResume;
