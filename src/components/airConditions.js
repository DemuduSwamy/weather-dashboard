import React from "react";
import WeeklyForecastItem from "./weeklyForcastItem";

const AirConditions = ({ realFeel, wind, cloud, humidity }) => {
  return (
    <div className="flex flex-col text-wrap w-fit p-4">
      <p className="font-bold text-[20px] mb-5 text-heading">AIR CONDITIONS</p>
      <div className="flex space-x-20">
        <div className="flex flex-col justify-center items-center">
          <WeeklyForecastItem value="Real Feel" type="temperature" />
          <p className="mt-4">{realFeel}°C</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <WeeklyForecastItem value="Wind" type="wind" />
          <p className="mt-4">{wind}m/s</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <WeeklyForecastItem value="Clouds" type="cloud" />
          <p className="mt-4">{cloud}%</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <WeeklyForecastItem value="Humidity" type="humidity" />
          <p className="mt-4">{humidity}%</p>
        </div>
      </div>
    </div>
  );
};

export default AirConditions;
