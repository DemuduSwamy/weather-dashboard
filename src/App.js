import { useState } from "react";
import "./App.css";
import { fetchWeatherData } from "./api/OpenWeatherService";
import AirConditions from "./components/airConditions";
import CurrentWeatherItem from "./components/currentWeatherItem";
import SearchBar from "./components/searchBox";
import TodayForcastList from "./components/todayForcastList";
import WeeklyForcastList from "./components/weeklyForcastList";
import { ALL_DESCRIPTIONS } from "./utilities/DateConstants";
import { transformDateFormat } from "./utilities/DatetimeUtils";
import {
  getTodayForecastWeather,
  getWeekForecastWeather,
} from "./utilities/dataUtils";

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

  return (
    <div className="bg-gradient-to-b from-[#03264E] to-[#0076A4] flex flex-col w-full h-screen py-10 justify-center items-center">
      <div className="bg-gradient-to-l from-[#87CEFA] to-[#E0FFFF] p-5 shadow-2xl rounded-lg  flex flex-col gap-5 w-fit">
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <p className="font-bold text-[26px] text-heading border-b-4 border-b-content">
              WEATHER
            </p>
            <p className="font-bold text-[26px] text-content border-b-4 border-b-heading">
              FORCASTING
            </p>
          </div>
          <p>Know your weather, plan your day.</p>
        </div>
        <div className="flex gap-44 ">
          <div className="flex flex-col gap-7">
            <SearchBar onSearchChange={handleSearchChange} />
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
                {todayForecast && (
                  <TodayForcastList todayForcast={todayForecast} />
                )}
              </>
            )}
          </div>
          <div>
            {weekForecast && (
              <div>
                <p className="font-bold text-[18px] mb-3 text-heading">
                  WEEKLY FORECAST
                </p>
                {weekForecast.list.map((item, index) => (
                  <WeeklyForcastList weatherData={item} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
