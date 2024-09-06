import { Loader2Icon, MoreVertical } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import GlobalApi from "./../../../service/GlobalApi";
import { toast } from "sonner";

function ResumeCardItem({ resume, refreshData }) {
  const navigate = useNavigate();
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const onDelete = () => {
    setLoading(true);
    GlobalApi.DeleteResumeById(resume?._id).then(
      resp => {
        toast("Resume Deleted!");
        refreshData();
        setLoading(false);
        setOpenAlert(false);
      },
      error => {
        setLoading(false);
      }
    );
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <Link to={"/dashboard/resume/" + resume?._id + "/edit"}>
        <div
          className="p-10 bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200 h-[280px] flex justify-center items-center"
          style={{
            borderTop: `4px solid ${resume?.themeColor}`,
          }}
        >
          <img src="/cv.png" alt="Resume" className="w-20 h-20" />
        </div>
      </Link>
      <div
        className="p-4 flex justify-between items-center rounded-b-lg"
        style={{ backgroundColor: resume?.themeColor }}
      >
        <h2 className=" font-semibold ">{resume?.title}</h2>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical className="cursor-pointer hover:text-gray-300 transition-colors duration-150" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white rounded-lg shadow-lg text-gray-700">
            <DropdownMenuItem
              className="hover:bg-gray-100 px-4 py-2"
              onClick={() =>
                navigate("/dashboard/resume/" + resume?._id + "/edit")
              }
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-gray-100 px-4 py-2"
              onClick={() => navigate("/my-resume/" + resume?._id + "/view")}
            >
              View
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-gray-100 px-4 py-2"
              onClick={() => navigate("/my-resume/" + resume?._id + "/view")}
            >
              Download
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-red-600 hover:bg-red-50 px-4 py-2"
              onClick={() => setOpenAlert(true)}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <AlertDialog open={openAlert}>
        <AlertDialogContent className="p-6 bg-white rounded-lg shadow-lg">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-semibold text-gray-800">
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-sm text-gray-600 mt-2">
              This action cannot be undone. This will permanently delete your
              resume and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-4 flex justify-end space-x-4">
            <AlertDialogCancel
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md"
              onClick={() => setOpenAlert(false)}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className={`px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-all duration-150 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={onDelete}
              disabled={loading}
            >
              {loading ? <Loader2Icon className="animate-spin" /> : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default ResumeCardItem;
