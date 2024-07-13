import React from "react";
import { FiWind } from "react-icons/fi";
import { MdOutlineCloudQueue } from "react-icons/md";
import { WiHumidity, WiThermometer } from "react-icons/wi";

const WeeklyForecastItem = ({ value, type }) => {
  let iconContent;

  if (type === "temperature")
    iconContent = <WiThermometer irs style={{ fontSize: "18px" }} />;
  else if (type === "wind")
    iconContent = <FiWind style={{ fontSize: "18px" }} />;
  else if (type === "clouds")
    iconContent = (
      <MdOutlineCloudQueue style={{ fontSize: "18px" }} color="black" />
    );
  else if (type === "humidity")
    iconContent = <WiHumidity style={{ fontSize: "18px" }} />;

  return (
    <div className="flex items-center gap-1">
      {iconContent}
      <p className="font-semibold text-heading">{value}</p>
    </div>
  );
};

export default WeeklyForecastItem;
