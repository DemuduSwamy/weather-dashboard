import React from "react";
import { FiWind } from "react-icons/fi";
import { MdOutlineCloudQueue } from "react-icons/md";
import { WiHumidity, WiThermometer } from "react-icons/wi";

const WeeklyForecastItem = ({ value, type }) => {
  let iconContent;

  if (type === "temperature") iconContent = <WiThermometer size={22} />;
  else if (type === "wind") iconContent = <FiWind size={20} />;
  else if (type === "clouds")
    iconContent = <MdOutlineCloudQueue color="black" size={20} />;
  else if (type === "humidity") iconContent = <WiHumidity size={22} />;

  return (
    <div className="flex items-center gap-1">
      {iconContent}
      <p className="font-semibold text-heading">{value}</p>
    </div>
  );
};

export default WeeklyForecastItem;
