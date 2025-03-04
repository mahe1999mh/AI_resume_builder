import React, { useContext, useState } from "react";
import PersonalDetail from "./forms/PersonalDetail";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import { Navigate, useParams } from "react-router-dom";
import Summery from "./forms/Summery";
import Experience from "./forms/Experience";
import Education from "./forms/Education";
import Skills from "./forms/Skills";
import ThemeColor from "./ThemeColor";
import Projects from "./forms/Project";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";


const FormSection = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const { resumeId } = useParams();
  const { resumeInfo } = useContext(ResumeInfoContext);

  return (
    <div className="p-1">
      <div className="flex justify-between items-center">
        <div className="flex justify-between gap-10">
          <ThemeColor />
          {/* <StyleSettings /> */}
        </div>

        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            !resumeInfo?.personal?.isExperience && activeFormIndex == 5 ?
              <Button
                onClick={() => setActiveFormIndex(activeFormIndex - 2)}
                size="sm"
              >
                <ArrowLeft />
              </Button> :
              <Button
                onClick={() => setActiveFormIndex(activeFormIndex - 1)}
                size="sm"
              >
                <ArrowLeft />
              </Button>
          )}
          {!resumeInfo?.personal?.isExperience && activeFormIndex == 3 ?
            <Button
              size="sm"
              disabled={activeFormIndex >= 7}
              className="flex gap-2"
              onClick={() => setActiveFormIndex(activeFormIndex + 2)}
            >
              Next
              <ArrowRight />
            </Button>
            : <Button
              size="sm"
              disabled={activeFormIndex >= 7}
              className="flex gap-2"
              onClick={() => setActiveFormIndex(activeFormIndex + 1)}
            >
              Next
              <ArrowRight />
            </Button>}
        </div>
      </div>
      {activeFormIndex == 1 && <PersonalDetail />}
      {activeFormIndex == 2 && <Summery />}
      {activeFormIndex == 3 && <Projects />}
      {activeFormIndex == 4 && <Experience />}
      {activeFormIndex == 5 && <Education />}
      {activeFormIndex == 6 && <Skills />}
      {activeFormIndex == 7 && (
        <Navigate to={"/my-resume/" + resumeId + "/view"} />
      )}
    </div>
  );
};

export default FormSection;
