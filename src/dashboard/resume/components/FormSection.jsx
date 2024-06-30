import React, { useState } from "react";
import PersonalDetail from "./forms/PersonalDetail";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import { useParams } from "react-router-dom";
import Summery from "./forms/Summery";
import Experience from "./forms/Experience";
import Education from "./forms/Education";
import Skills from "./forms/Skills";

const FormSection = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(true);
  const { resumeId } = useParams();
  return (
    <div className="p-1">
      <div className="flex justify-between items-center">
        <Button variant="outline" className="flex gap-2">
          <LayoutGrid />
          Theam
        </Button>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
              size="sm"
            >
              <ArrowLeft />
            </Button>
          )}
          <Button
            size="sm"
            disabled={activeFormIndex >= 5}
            className="flex gap-2"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            Next
            <ArrowRight />
          </Button>
        </div>
      </div>
     {activeFormIndex == 1 && <PersonalDetail />} 
     {activeFormIndex == 2 && <Summery />} 
     {activeFormIndex == 3 && <Experience />} 
     {activeFormIndex == 4 && <Education />} 
     {activeFormIndex == 5 && <Skills />} 

    </div>
  );
};

export default FormSection;
