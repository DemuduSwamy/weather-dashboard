import React, { useState } from "react";
import { AutoComplete, Input, Select } from "antd";
import { fetchCities } from "../api/OpenWeatherService";

const { Option } = Select;

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

  const onDropdownClick = () => {
    loadOptions(searchValue);
  };

  return (
    <AutoComplete
      options={options}
      onSearch={onSearchHandler}
      onSelect={onSelectHandler}
      value={searchValue}
      onChange={(value) => setSearchValue(value)}
      className="w-full text-[50px]"
      optionPadding="12px"
    >
      <Input
        placeholder="Search..."
        suffix={
          <Select
            defaultValue="Option1"
            className="select-dropdown"
            onClick={onDropdownClick}
          >
            {options.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        }
        className="custom-input"
      />
    </AutoComplete>
  );
};

export default SearchBar;
