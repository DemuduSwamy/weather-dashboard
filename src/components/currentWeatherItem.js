import { Image } from "antd";
import React from "react";
import { CiCloud } from "react-icons/ci";
import { weatherIcon } from "../utilities/IconsUtils";

const CurrentWeatherItem = ({ city, date, temperature, description, icon }) => {
  console.log({ temperature });
  return (
    <div className="flex flex-col items-center justify-center text-wrap w-fit p-4 ">
      <p className="font-bold text-[20px] mb-2">CURRENT WEATHER</p>

      <div className="flex flex-row gap-28">
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-[16px]">{city}</p>
          <p className="font-bold text-[16px]">{date}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-[16px]">{temperature}°C</p>
          <p className="font-bold text-[16px]">{description}</p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            width={32}
            src={weatherIcon(icon)}
            alt={"title"}
            style={{ filter: "invert(0%) brightness(0%)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherItem;
