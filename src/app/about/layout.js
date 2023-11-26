import Link from "next/link";
import React from "react";
import "./about.css";

const aboutLayout = ({ children }) => {
  return (
    <div>
      <div className="navbar">
        <div className="container mx-auto flex gap-4 font-semibold text-xl justify-center py-8">
          <Link className="hover:text-white transition-all" href={"/about"}>
            About
          </Link>
          <Link
            className="hover:text-white transition-all"
            href={"/about/aboutstudent"}
          >
            About Student
          </Link>
          <Link
            className="hover:text-white transition-all"
            href={"/about/aboutcollage"}
          >
            About Collage
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
};

export default aboutLayout;
