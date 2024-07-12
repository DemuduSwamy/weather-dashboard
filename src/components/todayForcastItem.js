import React from "react";
import { CiCloud } from "react-icons/ci";

const TodayForcastItem = () => {
  return (
    <div className="flex flex-col items-center shadow-xl rounded-lg bg-white w-fit p-5">
      <p className="text-lg font-bold"> Text</p>
      <CiCloud size={32} />
      <p className="text-lg"> Text</p>
    </div>
  );
};
export default TodayForcastItem;
