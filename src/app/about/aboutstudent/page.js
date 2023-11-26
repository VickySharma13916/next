import Link from "next/link";

const AboutStudent = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>About Student</h1>
      <Link href={"/about"}>About</Link>
    </div>
  );
};

export default AboutStudent;
