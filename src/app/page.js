"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  // const [state, setState] = useState("");
  // const alertty = () => {
  //   setState("hello");
  // };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      Home Page
      {/* <button onClick={() => alertty()}>Click Me</button> */}
      {/* {state && state} */}
      {/* <Link href={"/login"}>Login</Link>
      <Link href={"/about"}>About</Link> */}
      <button onClick={() => navigate("/login")}>Go to Login Page</button>
      <button onClick={() => navigate("/about")}>Go to About Page</button>
      <button onClick={() => navigate("/study")}>Go to Study Page</button>
      <button onClick={() => navigate("/studentList")}>
        Go to Student Page
      </button>
    </main>
  );
}
