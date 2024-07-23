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
import SplashIcon from "./assets/splash-icon.svg";
import GitHubIcon from "./assets/icons/git_hub_avathar.png";
import {
  getTodayForecastWeather,
  getWeekForecastWeather,
} from "./utilities/dataUtils";
import { Avatar, Image } from "antd";

function App() {
  const [todayWeather, setTodayWeather] = useState(null);
  const [todayForecast, setTodayForecast] = useState([]);
  const [weekForecast, setWeekForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearchChange = (enteredData) => {
    searchHandler({ enteredData });
  };

  const searchHandler = async ({ enteredData }) => {
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

  const OnClickAvatar = () => {
    // window.location.href = "https://github.com/DemuduSwamy/weather-dashboard";
    window.open("https://github.com/DemuduSwamy/weather-dashboard", "_blank");
  };

  return (
    <div className="bg-gradient-to-b from-[#03264E] to-[#0076A4] flex flex-col w-full h-screen justify-center items-center">
      <div className="bg-gradient-to-l from-[#87CEFA] to-[#E0FFFF] p-5 m-10 shadow-2xl rounded-lg flex flex-col w-fit">
        <div className="flex flex-col gap-1">
          <div className="flex gap-1 items-center">
            <p className="font-bold text-[26px] text-heading border-b-4 border-b-content">
              WEATHER
            </p>
            <p className="font-bold text-[26px] text-content border-b-4 border-b-heading">
              FORCASTING
            </p>
            <Avatar
              onClick={OnClickAvatar}
              size={45}
              className="ml-auto"
              src={GitHubIcon}
            ></Avatar>
          </div>
          <p>Know your weather, plan your day.</p>
        </div>
        <div className="flex gap-28 pt-3">
          <div className="flex flex-col gap-5">
            <SearchBar onSearchChange={handleSearchChange} />
            {todayWeather ? (
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
            ) : (
              <div className="flex flex-col gap-10 p-36 justify-center items-center ">
                <Image
                  width={100}
                  height={100}
                  src={SplashIcon}
                  alt="title"
                  preview={false}
                />
                <p>Explore current weather data and 6-day forecast</p>
              </div>
            )}
          </div>
          <div>
            {weekForecast && (
              <div>
                <p className="font-bold mb-4 text-[18px] text-heading">
                  WEEKLY FORECAST
                </p>
                {weekForecast.list.map((item, index) => (
                  <WeeklyForcastList
                    key={index}
                    weatherData={item}
                    index={index}
                  />
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
