import React from "react";

function ProjectPreview({ resumeInfo }) {
  //   let projects = [
  //     {
  //       projectName: "Inventory Management System",
  //       startDate: "2023-10-01",
  //       endDate: "2024-10-01",
  //       description:
  //         "This is a inventory Management System, Inventory management software is a software system for tracking inventory levels, orders, sales and deliveries. It can also be used in the manufacturing industry to create a work order, bill of materials and other production-related documents.",
  //     },
  //     {
  //       projectName: "Inventory Management System",
  //       startDate: "2023-10-01",
  //       endDate: "2024-10-01",
  //       description:
  //         "This is a inventory Management System, Inventory management software is a software system for tracking inventory levels, orders, sales and deliveries. It can also be used in the manufacturing industry to create a work order, bill of materials and other production-related documents.",
  //     },
  //   ];
  if (!resumeInfo) return null;
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Project
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />

      {resumeInfo?.projects?.map((project, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold flex justify-between"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            {project?.title}
            <span className="text-xs font-normal">
              {project?.startDate.slice(0, 7)} To{" "}
              {project?.currentlyWorking
                ? "Present"
                : project?.endDate.slice(0, 7)}{" "}
            </span>
          </h2>
          <div
            className="text-xs my-2 text-justify"
            dangerouslySetInnerHTML={{ __html: project?.summary }}
          />
        </div>
      ))}
    </div>
  );
}

export default ProjectPreview;
