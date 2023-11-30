"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [data, setData] = useState([]);
  const fetchAPI = async () => {
    fetch("https://turaback.turacoz.com/api/turacozteam")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Product List</h1>
      {data &&
        data?.map((item) => {
          return (
            <div
              key={item?._id}
              className="flex flex-col items-center justify-end flex-wrap border border-red-200 rounded gap-4"
            >
              <Image
                src={`https://turaback.turacoz.com/${item?.teamImage}`}
                alt={item?.teamName}
                width={200}
                height={200}
              />
              <h2>{item?.teamName}</h2>
              <h3>{item?.teamDesignation}</h3>
              <h4>{item?.teamCategory}</h4>
              <p>{item?.teamAbout}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ProductList;
