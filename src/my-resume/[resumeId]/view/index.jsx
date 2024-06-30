import React, { useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "./../../../../service/GlobalApi";
import { RWebShare } from "react-web-share";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import Header from "@/components/custom/Header";
import ResumePreview from "@/dashboard/resume/components/ResumePreview";
import { Button } from "@/components/ui/button"; // Assuming Button is a named export

function ViewResume() {
  const [resumeInfo, setResumeInfo] = useState();
  const { resumeId } = useParams();

  // useEffect(() => {
  //   // Example: Fetch resume info on component mount
  //   GetResumeInfo();
  // }, []);

  // const GetResumeInfo = () => {
  //   GlobalApi.GetResumeById(resumeId).then((resp) => {
  //     console.log(resp.data.data);
  //     setResumeInfo(resp.data.data);
  //   });
  // };

  const HandleDownload = () => {
    window.print();
  };

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div id="no-print">
        <Header />

        <div className="my-10 mx-10 md:mx-20 lg:mx-36">
          <h2 className="text-center text-2xl font-medium">
            Congrats! Your Ultimate AI-generated Resume is ready!
          </h2>
          <p className="text-center text-gray-400">
            Now you are ready to download your resume and share the unique URL
            with your friends and family.
          </p>
          <div className="flex justify-between px-44 my-10">
            <Button onClick={HandleDownload}>Download</Button>

            <RWebShare
              data={{
                text: "Hello Everyone, This is my resume. Please open the URL to view it.",
                url: `${import.meta.env.VITE_BASE_URL}/my-resume/${resumeId}/view`,
                title: `${resumeInfo?.firstName} ${resumeInfo?.lastName} resume`,
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <Button>Share</Button>
            </RWebShare>
          </div>
        </div>
      </div>
      <div className="my-10 mx-10 md:mx-20 lg:mx-36">
        <div id="print-area">
          <ResumePreview />
        </div>
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default ViewResume;