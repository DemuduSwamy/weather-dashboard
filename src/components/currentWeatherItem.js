import { Image } from "antd";
import React from "react";
import { weatherIcon } from "../utilities/IconsUtils";

const CurrentWeatherItem = ({ city, date, temperature, description, icon }) => {
  console.log({ temperature });
  return (
    <div className="flex flex-col text-wrap w-fit p-4 ">
      <div className="flex flex-row gap-28">
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-[28px] text-heading">{city}</p>
          <p className="font-bold text-[36px] text-content">{temperature}°C</p>
        </div>
        <div className="flex  flex-col items-center justify-center">
          <Image
            width={50}
            height={50}
            src={weatherIcon(icon)}
            alt={"title"}
            style={{ filter: "invert(0%) brightness(0%)" }}
            color="white"
            preview={false}
          />
          <p className="font-bold text-[16px] text-heading">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherItem;
