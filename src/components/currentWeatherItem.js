import { Image } from "antd";
import React from "react";
import { weatherIcon } from "../utilities/IconsUtils";

const CurrentWeatherItem = ({ city, date, temperature, description, icon }) => {
  console.log({ temperature });
  return (
    <div className="flex flex-col text-wrap w-fit p-4 pt-0">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <p className="font-bold text-[28px] text-heading">{city}</p>
        </div>
        <div className="flex gap-5">
          <p className="font-bold text-[30px] text-content">{temperature}°C</p>
          <Image
            width={50}
            height={50}
            src={weatherIcon(icon)}
            alt={"title"}
            color="white"
            preview={false}
          />
        </div>
        <p className="text-[16px] text-heading">{description}</p>
      </div>
    </div>
  );
};

export default CurrentWeatherItem;
