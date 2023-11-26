import Link from "next/link";

const AboutCollage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>About Collage</h1>
      <Link href={"/about"}>About</Link>
    </div>
  );
};

export default AboutCollage;
