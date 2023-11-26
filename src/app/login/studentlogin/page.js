import Link from "next/link";

const StudentLogin = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Student Login</h1>
      <Link href={"/login"}>Login</Link>
    </div>
  );
};

export default StudentLogin;
