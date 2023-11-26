import Link from "next/link";

const TeacherLogin = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Teacher Login</h1>
      <Link href={"/login"}>Login</Link>
    </div>
  );
};

export default TeacherLogin;
