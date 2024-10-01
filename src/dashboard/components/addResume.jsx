import { LoaderCircle, PlusSquare } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useCreateResumeMutation } from "../../redux/resume/resumeApi";

const AddResume = () => {
  const { user } = useUser();
  const navigate = useNavigate(); // It's 'navigate', not 'navigation' in React Router v6
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const [loading, setLoading] = useState(false);

  // Use the mutation hook
  const [createResume] = useCreateResumeMutation();

  const onCreate = async () => {
    setLoading(true);
    const uuid = new Date().getTime();
    const data = {
      title: resumeTitle,
      resumeId: uuid.toString(),
      userEmail: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
    };

    try {
      // Call the mutation hook instead of GlobalApi
      const response = await createResume(data).unwrap();
      console.log(response);

      if (response) {
        setLoading(false);
        setOpenDialog(false);
        navigate("/dashboard/resume/" + response.resumeId + "/edit");
        setTimeout(() => {
          navigate(-1); // Navigate back
        }, 10);
      }
    } catch (error) {
      console.error("Failed to create resume:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed"
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare />
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              <p>Add a title for your new resume</p>
              <Input
                className="my-10"
                placeholder="Ex. Full Stack Resume"
                onChange={e => setResumeTitle(e.target.value)}
              />
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-5 mt-4">
            <Button variant="ghost" onClick={() => setOpenDialog(false)}>
              Cancel
            </Button>
            <Button onClick={onCreate}>
              {loading ? <LoaderCircle className="animate-spin" /> : "Create"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResume;
