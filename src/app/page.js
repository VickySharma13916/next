"use client";

import { useState } from "react";

const About = ({ hell }) => {
  return <h1>About Me {hell}</h1>;
};
export default function Home() {
  const [state, setState] = useState("");
  const alertty = () => {
    alert("hello world!!!!");
    setState("hello");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      Hello World !!!
      <About hell={"hello"} />
      <button onClick={() => alertty()}>Click Me</button>
      {state && state}
    </main>
  );
}
