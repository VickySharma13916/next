import Link from "next/link";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>About</h1>
      <Link href={"/"}>Home</Link>
      <Link href={"/about/aboutcollage"}>About Collage</Link>
      <Link href={"/about/aboutstudent"}>About Student</Link>
    </div>
  );
};

export default About;

export function generateMetadata({ params }) {
  return {
    title: "About Us Next.js",
    description: "About Us Description",
  };
}
