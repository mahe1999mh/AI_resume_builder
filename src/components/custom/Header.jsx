import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";
import ResumeLogo from "./../../assets/logo.png";
const Header = () => {
  const { user, isSignedIn } = useUser();

  return (
    <div className="p-3 px-5 flex justify-between shadow-md">
      <img src={ResumeLogo} width={150} height={150} />
      {isSignedIn ? (
        <div className="flex gap-2 items-center">
          <Link to={"/dashboard"}>
            <Button variant="outline">Dashbord</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <>
          <Link to={"/auth/sign-in"}>
            <Button>Get Statred</Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
