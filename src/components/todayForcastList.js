import React from "react";
import TodayForcastItem from "./todayForcastItem";

const TodayForcastList = () => {
  const gridData = [
    { title: "Card 1", content: "Content 1" },
    { title: "Card 2", content: "Content 2" },
    { title: "Card 3", content: "Content 3" },
    { title: "Card 1", content: "Content 1" },
    { title: "Card 2", content: "Content 2" },
    { title: "Card 3", content: "Content 3" },
  ];
  return (
    <div className="flex flex-col items-center justify-center text-wra w-fit p-4">
      <p className="font-bold text-[20px] mb-5">TODAY'S FORECAST</p>
      <div className="flex gap-2">
        {gridData.map((item, index) => (
          <div key={index}>
            <TodayForcastItem />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayForcastList;
