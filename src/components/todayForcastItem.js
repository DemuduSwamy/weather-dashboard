import { Image } from "antd";
import React from "react";

const TodayForecastItem = ({ title, imageUrl, description }) => {
  console.log(imageUrl);
  return (
    <div className="flex flex-col items-center shadow-2xl rounded-lg bg-white w-fit p-5">
      <p className="text-lg font-bold">{title}</p>
      <Image width={32} src={imageUrl} alt={title} preview={false} />
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default TodayForecastItem;
