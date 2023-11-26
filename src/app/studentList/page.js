import Link from "next/link";
import React from "react";

const StudentList = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Student List</h1>
      <div className="flex flex-col gap-4">
        <Link href={"/studentList/Vicky"}>
          <div className="font-semibold">Vicky</div>
        </Link>
        <Link href={"/studentList/Rishabh"}>
          <div className="font-semibold">Rishabh</div>
        </Link>
        <Link href={"/studentList/Rahul"}>
          <div className="font-semibold">Rahul</div>
        </Link>
        <Link href={"/studentList/Anamika"}>
          <div className="font-semibold">Anamika</div>
        </Link>
        <Link href={"/studentList/Sharma"}>
          <div className="font-semibold">Sharma</div>
        </Link>
      </div>
    </div>
  );
};

export default StudentList;
