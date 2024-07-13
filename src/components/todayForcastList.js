import React from "react";
import TodayForecastItem from "./todayForcastItem";
import { weatherIcon } from "../utilities/IconsUtils";

const TodayForcastList = ({ todayForcast }) => {
  return (
    <div className="flex flex-col items-center justify-center text-wra w-fit p-4">
      <p className="font-bold text-[20px] mb-5">TODAY'S FORECAST</p>
      <div className="flex gap-2">
        {todayForcast.map((item, index) => (
          <div key={index}>
            <TodayForecastItem
              title={item.time}
              imageUrl={weatherIcon(`${item.icon}.png`)}
              description={item.temperature}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayForcastList;
