"use client";

import { useRouter } from "next/navigation";
import color from "@/app/style.module.css";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "100",
  subsets: ["latin"],
  display: "swap",
});
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
    <main
      className={`flex min-h-screen flex-col items-center justify-center ${roboto.className}`}
    >
      Home Page
      {/* <button onClick={() => alertty()}>Click Me</button> */}
      {/* {state && state} */}
      {/* <Link href={"/login"}>Login</Link>
      <Link href={"/about"}>About</Link> */}
      <button className={color.red} onClick={() => navigate("/login")}>
        Go to Login Page
      </button>
      <button className={color.blue} onClick={() => navigate("/about")}>
        Go to About Page
      </button>
      <button onClick={() => navigate("/productList")}>
        Go to Product List Page
      </button>
      <button
        style={{ backgroundColor: color == "red" ? "red" : "green" }}
        onClick={() => navigate("/team")}
      >
        Go to Team Page
      </button>
      <button onClick={() => navigate("/study")}>Go to Study Page</button>
      <button onClick={() => navigate("/studentList")}>
        Go to Student Page
      </button>
    </main>
  );
}
