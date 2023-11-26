"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const navigate = (route) => {
    router.push(route);
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Login</h1>
      <Link href={"/"}>Home</Link>
      <button onClick={() => navigate("/login/studentlogin")}>
        Student Login
      </button>
      <button onClick={() => navigate("/login/teacherlogin")}>
        Teacher Login
      </button>
    </div>
  );
};

export default Login;
