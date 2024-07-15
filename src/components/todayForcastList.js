import React from "react";
import { weatherIcon } from "../utilities/IconsUtils";
import TodayForecastItem from "./todayForcastItem";

const TodayForcastList = ({ todayForcast }) => {
  return (
    <div className="flex flex-col text-wrap w-fit p-4">
      <p className="font-bold text-[18px] mb-3 text-heading">
        TODAY'S FORECAST
      </p>
      <div className="flex gap-5">
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
