import { Input } from "@/components/ui/input";
import { useContext, useEffect, useState } from "react";
import { Plus } from "lucide-react";
import Button, { AddButton } from "@/components/custom/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Chip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useUpdateResumeDetailMutation } from "@/redux/resume/resumeApi";
import { useParams } from "react-router-dom";
import useDebounce from "@/components/hooks/useDebounce";

function Skills() {
  const inBuildSkills = {
    technicalSkills: ["ReactJS", "NodeJS", "HTML", "CSS"],
    softSkills: ["Communication", "TeamWork", "Problem-Solving"],
  };
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [post, postState] = useUpdateResumeDetailMutation();
  const params = useParams();

  console.log(resumeInfo, "resumeInfotharu");

  const [skillsList, setSkillsList] = useState({
    technicalSkills: [],
    softSkills: [],
  });

  const [formState, setFormState] = useState({
    technicalSkills: "",
    softSkills: "",
  });

  const onChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const debouncedSetResumeInfo = useDebounce(updatedSkills => {
    setResumeInfo(prev => ({
      ...prev,
      skills: updatedSkills,
    }));
  }, 100);

  useEffect(() => {
    debouncedSetResumeInfo(skillsList);
  }, [skillsList, debouncedSetResumeInfo]);

  useEffect(() => {
    if (resumeInfo?.skills) {
      setSkillsList({
        technicalSkills: [...(resumeInfo?.skills?.technicalSkills || [])],
        softSkills: [...(resumeInfo?.skills?.softSkills || [])],
      });
    }
  }, [resumeInfo]);

  const handleAddSkill = module => {
    if (
      skillsList?.[module]?.some(
        li => li?.toLowerCase() === formState?.[module].toLowerCase()
      )
    ) {
      return alert("This skill is already added");
    }

    if (formState?.[module]) {
      setSkillsList(prev => ({
        ...prev,
        [module]: [...prev[module], formState?.[module]],
      }));
      setFormState({
        technicalSkills: "",
        softSkills: "",
      });
    }
  };
  const handleAddDefaultSkill = (value, module) => {
    if (
      skillsList?.[module]?.some(
        li => li?.toLowerCase() === value.toLowerCase()
      )
    ) {
      return alert("This skill is already added");
    }
    if (value) {
      setSkillsList(prev => ({
        ...prev,
        [module]: [...prev[module], value],
      }));
    }
  };
  const handleRemoveSkill = (index, module) => {
    setSkillsList(prev => ({
      ...prev,
      [module]: prev[module].filter((_, idx) => idx !== index),
    }));
  };

  const onSave = () => {
    const { technicalSkills, softSkills } = skillsList;
    const data = {
      skills: {
        technicalSkills: [...technicalSkills],
        softSkills: [...softSkills],
      },
    };
    post({ id: params.resumeId, data });
  };
  useEffect(() => {
    if (postState?.isSuccess) {
      setTimeout(() => {
        postState?.reset();
      }, 3000);
    }
  }, [postState]);

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Skills</h2>
      <p>Add Your top professional key skills</p>

      <div className="py-4">
        <h2 className="font-bold text-sm">Technical Skills</h2>
        <div className="flex gap-3">
          <Input
            className="w-50"
            name="technicalSkills"
            value={formState?.technicalSkills}
            onChange={e => onChange(e)}
          />
          <AddButton
            className="text-primary"
            variant={"outline"}
            icon={<Plus size={20} color="rgb(159 91 255)" />}
            onClick={() => handleAddSkill("technicalSkills")}
          >
            Add
          </AddButton>
        </div>
        <div className="mt-5">
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>In-Built Technical Skills</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {inBuildSkills?.technicalSkills?.map((li, index) => (
                <Chip
                  key={index}
                  disabled={skillsList?.technicalSkills?.includes(li)}
                  onClick={() => handleAddDefaultSkill(li, "technicalSkills")}
                  icon={<AddIcon />}
                  sx={{
                    mx: 1,
                    backgroundColor: "rgb(159 91 255 / 60%)",
                    color: "white",
                  }}
                  label={li}
                />
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
        {skillsList?.technicalSkills?.length > 0 && (
          <div className="mb-2 w-full border rounded-lg p-3 ">
            {skillsList?.technicalSkills?.map((li, index) => (
              <Chip
                key={index}
                label={li}
                sx={{ m: 1 }}
                color="default"
                icon={
                  <CloseIcon
                    sx={{ fontSize: 20 }}
                    color="error"
                    onClick={() => handleRemoveSkill(index, "technicalSkills")}
                  />
                }
              />
            ))}
          </div>
        )}
      </div>

      <div className="py-4">
        <h2 className="font-bold text-sm">Soft Skills</h2>
        <div className="flex gap-3">
          <Input
            className="w-50"
            name="softSkills"
            value={formState?.softSkills}
            onChange={e => onChange(e)}
          />
          <AddButton
            className="text-primary"
            variant={"outline"}
            icon={<Plus size={20} color="rgb(159 91 255)" />}
            onClick={() => handleAddSkill("softSkills")}
          >
            Add
          </AddButton>
        </div>
        <div className="mt-5">
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>In-Built Soft Skills</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {inBuildSkills?.softSkills?.map((li, index) => (
                <Chip
                  key={index}
                  disabled={skillsList?.softSkills.includes(li)}
                  sx={{
                    mx: 1,
                    backgroundColor: "rgb(159 91 255 / 60%)",
                    color: "white",
                  }}
                  onClick={() => handleAddDefaultSkill(li, "softSkills")}
                  icon={<AddIcon />}
                  label={li}
                />
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
        {skillsList?.softSkills?.length > 0 && (
          <div className="mb-2 w-full border rounded-lg p-3 ">
            {skillsList?.softSkills?.map((li, index) => (
              <Chip
                key={index}
                label={li}
                sx={{ m: 1 }}
                color="default"
                icon={
                  <CloseIcon
                    sx={{ fontSize: 20 }}
                    color="error"
                    onClick={() => handleRemoveSkill(index, "softSkills")}
                  />
                }
              />
            ))}
          </div>
        )}
      </div>
      <Button
        success={postState?.isSuccess}
        loading={postState?.isLoading}
        onClick={() => onSave()}
      >
        Save
      </Button>
    </div>
  );
}

export default Skills;
