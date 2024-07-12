import React from "react";
import WeeklyForecastItem from "./weeklyForcastItem";

const WeeklyForcastList = () => {
  const gridData = [
    { title: "Card 1", content: "Content 1" },
    { title: "Card 2", content: "Content 2" },
    { title: "Card 3", content: "Content 3" },
  ];
  return (
    <div className="flex justify-between items-center shadow-xl rounded-lg bg-white p-4 w-fit gap-40">
      {gridData.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <WeeklyForecastItem value="25°C" type="temperature" />
          <WeeklyForecastItem value="10 km/h" type="wind" />
        </div>
      ))}
    </div>
  );
};

export default WeeklyForcastList;
