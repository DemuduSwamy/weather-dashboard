import { AutoComplete, Input } from "antd";
import React, { useState } from "react";

import { fetchCities } from "../api/OpenWeatherService";

const SearchBar = ({ onSearchChange }) => {
  const [options, setOptions] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const loadOptions = async (inputValue) => {
    if (!inputValue) {
      setOptions([]);
      return;
    }

    try {
      const citiesList = await fetchCities(inputValue);
      if (citiesList && Array.isArray(citiesList.data)) {
        const newOptions = citiesList.data.map((city) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        }));

        setOptions(newOptions);
      } else {
        setOptions([]);
      }
    } catch (error) {
      console.error("Error fetching cities:", error);
      setOptions([]);
    }
  };

  const onSearchHandler = (inputValue) => {
    setSearchValue(inputValue);
    loadOptions(inputValue);
  };

  const onSelectHandler = (value, option) => {
    setSearchValue(option.label);
    onSearchChange(option);
  };

  return (
    <AutoComplete
      options={options}
      onSearch={onSearchHandler}
      onSelect={onSelectHandler}
      value={searchValue}
      onChange={(value) => setSearchValue(value)}
      className="w-full text-[50px]"
    >
      {/* <Input placeholder="Search..." className="custom-input" /> */}
      <Input size="large" placeholder="Enter city name..." enterButton />
    </AutoComplete>
  );
};

export default SearchBar;
