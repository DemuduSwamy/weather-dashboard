import React from "react";
import WeeklyForecastItem from "./weeklyForcastItem";

const AirConditions = () => {
  return (
    <div className="flex flex-col items-center justify-center text-wra w-fit p-4">
      <p className="font-bold text-[20px] mb-5">AIR CONDITIONS</p>
      <div className="flex space-x-32">
        <div className="flex flex-col justify-center items-center">
          <WeeklyForecastItem value="25°C" type="temperature" />
          <p className="mt-4">25°C</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <WeeklyForecastItem value="25°C" type="temperature" />
          <p className="mt-4">25°C</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <WeeklyForecastItem value="25°C" type="temperature" />
          <p className="mt-4">25°C</p>
        </div>
      </div>
    </div>
  );
};

export default AirConditions;
