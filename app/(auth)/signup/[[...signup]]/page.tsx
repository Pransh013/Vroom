import { SignIn, SignUp } from "@clerk/nextjs";
import React from "react";

const SignupPage = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center bg-foreground">
      <SignUp />
    </div>
  );
};

export default SignupPage;
