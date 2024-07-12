import React from "react";
import { CiCloud } from "react-icons/ci";

const CurrentWeatherItem = () => {
  return (
    <div className="flex flex-col items-center justify-center text-wrap w-fit p-4 ">
      <p className="font-bold text-[20px] mb-2">CURRENT WEATHER</p>

      <div className="flex flex-row space-x-10">
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-[16px]">CURRENT WEATHER</p>
          <p className="font-bold text-[16px]">CURRENT</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-[16px]">CURRENT WEATHER</p>
          <p className="font-bold text-[16px]">CURRENT</p>
        </div>
        <div className="flex items-center justify-center">
          <CiCloud size={50} />
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherItem;
