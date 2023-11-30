"use client";
import Script from "next/script";
import React from "react";

const Study = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Study</h1>
      <h2>Get Student Location</h2>
      <Script
        src="/location.js"
        onLoad={() => {
          console.log("file Loading");
        }}
      />
    </div>
  );
};

export default Study;
