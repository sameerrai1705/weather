import React, { useEffect, useState } from "react";
import "./weather.css";
import Card from "./card";

const Weather = () => {
    const details = {
        name : 'Kolkata',
        temp : "29°C"
    }
  const [city, setCity] = useState(details);
  const [search, setSearch] = useState("Kolkata");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=47ad72e2d3658eb773c282be9a4cb9c0`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="container">
        <input
          type="search"
          placeholder="Search"
          className="form-control mt-5 mb-4"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        {/* <Card name = {city.name} temp = {city.temp} temp_min = {city.temp_min} temp_max = {city.temp_max} /> */}
      </div>
    </>
  );
};

export default Weather;
