import Image from "next/image";
import Button from "./button";
async function productList() {
  let data = await fetch("https://turaback.turacoz.com/api/turacozteam");
  data = await data.json();
  return data;
}
const Team = async () => {
  let team = await productList();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="my-4 text-2xl">Team List</h1>
      <div className="flex flex-wrap gap-4">
        {team &&
          team?.map((item) => {
            return (
              <div
                key={item?._id}
                className="flex flex-col items-center justify-between w-80 p-2 border rounded gap-4"
              >
                <Image
                  src={`https://turaback.turacoz.com/${item?.teamImage}`}
                  alt={item?.teamName}
                  width={200}
                  height={200}
                  className="w-auto h-auto"
                  priority={true}                 
                />
                <h2>{item?.teamName}</h2>
                <h3>{item?.teamDesignation}</h3>
                <h4>{item?.teamCategory}</h4>
                <p className="line-clamp-6">{item?.teamAbout}</p>
                <Button name={item?.teamName} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Team;
