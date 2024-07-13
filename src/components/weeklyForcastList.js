import React from "react";
import WeeklyForecastItem from "./weeklyForcastItem";
import { Image } from "antd";
import { weatherIcon } from "../utilities/IconsUtils";
import { getWeekDays } from "../utilities/DatetimeUtils";

const WeeklyForcastList = ({ weatherData, index }) => {
  const forecastDays = getWeekDays();
  const conditions = [
    [
      { value: forecastDays[index], type: "date" },
      {
        value: (
          <div className="flex items-center justify-center gap-2">
            <Image
              width={32}
              src={weatherIcon(weatherData.icon)}
              alt={"title"}
              style={{ filter: "invert(0%) brightness(0%)" }}
            />
            <p className="text-sm sm:text-base font-semibold">
              {weatherData.description}
            </p>
          </div>
        ),
        type: "icon",
      },
    ],
    [
      { value: `${weatherData.temp}°C`, type: "temperature" },
      { value: `${weatherData.clouds}%`, type: "clouds" },
    ],
    [
      { value: `${weatherData.wind} km/h`, type: "wind" },
      { value: `${weatherData.humidity}%`, type: "humidity" },
    ],
  ];

  return (
    <div className="flex justify-between items-center shadow-xl rounded-lg bg-white p-4 gap-20">
      {conditions.map((group, groupIndex) => (
        <div key={groupIndex} className="flex flex-col items-center gap-2">
          {group.map((condition, conditionIndex) => (
            <WeeklyForecastItem
              key={conditionIndex}
              value={condition.value}
              type={condition.type}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default WeeklyForcastList;
