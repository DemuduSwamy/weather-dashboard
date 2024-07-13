import React from "react";
import WeeklyForecastItem from "./weeklyForcastItem";
import { Image } from "antd";
import { weatherIcon } from "../utilities/IconsUtils";
import { getWeekDays } from "../utilities/DatetimeUtils";

const WeeklyForcastList = ({ weatherData, index }) => {
  const forecastDays = getWeekDays();
  return (
    <div className="flex justify-between items-center shadow-xl rounded-lg bg-white p-4 gap-20">
      <div className="flex flex-col items-center">
        <WeeklyForecastItem value={forecastDays[index]} type="date" />
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
      </div>
      <div className="flex flex-col items-center gap-2">
        <WeeklyForecastItem
          value={`${weatherData.temp}°C`}
          type="temperature"
        />
        <WeeklyForecastItem value={`${weatherData.clouds}%`} type="clouds" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <WeeklyForecastItem value={`${weatherData.wind} km/h`} type="wind" />
        <WeeklyForecastItem
          value={`${weatherData.humidity}%`}
          type="humidity"
        />
      </div>
    </div>
  );
};

export default WeeklyForcastList;
