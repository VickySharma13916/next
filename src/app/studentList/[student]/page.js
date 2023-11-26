"use client";
import React from "react";

const Student = ({ params }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Student Details</h1>
      <div className="font-semibold">{params?.student}</div>
    </div>
  );
};

export default Student;
