import React from "react";
import WeeklyForecastItem from "./weeklyForcastItem";

const AirConditions = ({ realFeel, wind, cloud, humidity }) => {
  const conditions = [
    { value: "Real Feel", type: "temperature", data: `${realFeel}°C` },
    { value: "Wind", type: "wind", data: `${wind}m/s` },
    { value: "Clouds", type: "cloud", data: `${cloud}%` },
    { value: "Humidity", type: "humidity", data: `${humidity}%` },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-wra w-fit p-4">
      <p className="font-bold text-[20px] mb-5">AIR CONDITIONS</p>
      <div className="flex gap-20">
        {conditions.map((condition, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <WeeklyForecastItem value={condition.value} type={condition.type} />
            <p className="mt-4">{condition.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirConditions;
