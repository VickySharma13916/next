import User from "@/components/user";
import React from "react";

const UserPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>User Page</h1>
      <User />
    </div>
  );
};

export default UserPage;
