import { Input } from "@/components/ui/input";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from "../../../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
function SoftSkills() {
    const [softSkillsList, setSoftSkillsList] = useState([
        {
            name: "",
            rating: 0,
        },
    ]);
    const { resumeId } = useParams();

    const [loading, setLoading] = useState(false);
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

    useEffect(() => {
        resumeInfo && setSoftSkillsList(resumeInfo?.softSkills || []);
    }, []);

    const handleChange = (index, name, value) => {
        const newEntries = softSkillsList.slice();

        newEntries[index][name] = value;
        setSoftSkillsList(newEntries);
    };

    const AddNewSkills = () => {
        setSoftSkillsList([
            ...softSkillsList,
            {
                name: "",
                rating: 0,
            },
        ]);
    };
    const RemoveSkills = () => {
        setSoftSkillsList((softSkillsList) => softSkillsList.slice(0, -1));
    };

    const onSave = () => {
        setLoading(true);
        const data = {
            softSkills: softSkillsList.map(({ id, ...rest }) => rest),
        };

        GlobalApi.UpdateResumeDetail(resumeId, data).then(
            (resp) => {
                console.log(resp);
                setLoading(false);
                toast("Details updated !");
            },
            (error) => {
                setLoading(false);
                toast("Server Error, Try again!");
            }
        );
    };

    useEffect(() => {
        setResumeInfo({
            ...resumeInfo,
            softSkills: softSkillsList,
        });
    }, [softSkillsList]);
    return (
        <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
            <h2 className="font-bold text-lg">Soft Skills</h2>
            <p>Add Your top professional Soft skills</p>

            <div>
                {softSkillsList.map((item, index) => (
                    <div className="flex justify-between mb-2 border rounded-lg p-3 ">
                        <div>
                            <label className="text-xs">Name</label>
                            <Input
                                className="w-full"
                                defaultValue={item.name}
                                onChange={(e) => handleChange(index, "name", e.target.value)}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        onClick={AddNewSkills}
                        className="text-primary"
                    >
                        {" "}
                        + Add More Skill
                    </Button>
                    <Button
                        variant="outline"
                        onClick={RemoveSkills}
                        className="text-primary"
                    >
                        {" "}
                        - Remove
                    </Button>
                </div>
                <Button disabled={loading} onClick={() => onSave()}>
                    {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
                </Button>
            </div>
        </div>
    );
}

export default SoftSkills;
