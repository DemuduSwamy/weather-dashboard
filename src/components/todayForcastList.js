import React from "react";
import { weatherIcon } from "../utilities/IconsUtils";
import TodayForecastItem from "./todayForcastItem";

const TodayForcastList = ({ todayForcast }) => {
  return (
    <div className="flex flex-col items-center justify-center text-wra w-fit p-4">
      <p className="font-bold text-[20px] mb-5 text-heading">
        TODAY'S FORECAST
      </p>
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
