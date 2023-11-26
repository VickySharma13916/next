"use lient";
const Lecture = ({ params }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>{params?.lecture[0]}</h1>
      <h1>{params?.lecture[1]}</h1>
      <h1>{params?.lecture[2]}</h1>
    </div>
  );
};

export default Lecture;
