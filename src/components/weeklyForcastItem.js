import React from "react";
import { CiFilter } from "react-icons/ci";
import { FaThermometerEmpty } from "react-icons/fa";
import { FaStairs } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";

const WeeklyForecastItem = ({ value, type }) => {
  let iconContent;

  if (type === "temperature")
    iconContent = <FaStairs style={{ fontSize: "18px" }} />;
  else if (type === "wind")
    iconContent = <FaThermometerEmpty style={{ fontSize: "18px" }} />;
  else if (type === "clouds")
    iconContent = <CiFilter style={{ fontSize: "18px" }} />;
  else if (type === "humidity")
    iconContent = <WiHumidity style={{ fontSize: "18px" }} />;

  return (
    <div className="flex items-center justify-start">
      {iconContent}
      <p className="text-sm sm:text-base font-semibold">{value}</p>
    </div>
  );
};

export default WeeklyForecastItem;
