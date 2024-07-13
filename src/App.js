import { useEffect, useState } from "react";
import "./App.css";
import AirConditions from "./components/airConditions";
import CurrentWeatherItem from "./components/currentWeatherItem";
import SearchBar from "./components/searchBox";
import TodayForcastList from "./components/todayForcastList";
import WeeklyForcastList from "./components/weeklyForcastList";
import { fetchWeatherData } from "./api/OpenWeatherService";
import {
  getTodayForecastWeather,
  getWeekForecastWeather,
} from "./utilities/dataUtils";
import { ALL_DESCRIPTIONS } from "./utilities/DateConstants";
import { transformDateFormat } from "./utilities/DatetimeUtils";

function App() {
  const [todayWeather, setTodayWeather] = useState(null);
  const [todayForecast, setTodayForecast] = useState([]);
  const [weekForecast, setWeekForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleSearchChange = (enteredData) => {
    searchHAndler({ enteredData });
  };

  const searchHAndler = async ({ enteredData }) => {
    const [latitude, longitude] = enteredData.value.split(" ");

    const currentDate = transformDateFormat();
    const date = new Date();
    let dt_now = Math.floor(date.getTime() / 1000);
    try {
      const [todayWeatherResponse, weekForecastResponse] =
        await fetchWeatherData(latitude, longitude);
      const all_today_forecasts_list = getTodayForecastWeather(
        weekForecastResponse,
        currentDate,
        dt_now
      );

      const all_week_forecasts_list = getWeekForecastWeather(
        weekForecastResponse,
        ALL_DESCRIPTIONS
      );

      setTodayForecast([...all_today_forecasts_list]);
      setTodayWeather({ city: enteredData.label, ...todayWeatherResponse });
      setWeekForecast({
        city: enteredData.label,
        list: all_week_forecasts_list,
      });
    } catch (error) {
      setError(true);
    }
  };

  console.log("todayWeather_001", JSON.stringify(todayWeather));
  console.log("todayForecast_001", JSON.stringify(todayForecast));

  return (
    <div className="bg-primary  flex  flex-col px-40 py-5">
      <div className="bg-secondary p-8 shadow-2xl rounded-lg  flex flex-col gap-5">
        <p className="font-bold text-[25px]">WEATHER FORCASTING</p>
        <div>
          <SearchBar onSearchChange={handleSearchChange} />
        </div>
        <div className="flex justify-between pt-5">
          <div className="flex flex-col gap-10">
            {todayWeather && (
              <>
                <CurrentWeatherItem
                  city={todayWeather.city}
                  date={"Today"}
                  description={todayWeather.weather[0].description}
                  temperature={todayWeather.main.temp}
                  icon={`${todayWeather.weather[0].icon}.png`}
                />
                <AirConditions
                  realFeel={todayWeather.main.feels_like}
                  humidity={todayWeather.main.humidity}
                  cloud={todayWeather.clouds.all}
                  wind={todayWeather.wind.speed}
                />
              </>
            )}

            {todayForecast && <TodayForcastList todayForcast={todayForecast} />}
          </div>
          {weekForecast && (
            <div className="flex-col flex gap-2">
              {weekForecast.list.map((item, index) => (
                <WeeklyForcastList weatherData={item} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
