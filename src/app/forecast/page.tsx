"use client";

import Button from "@/components/Button";
import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import Cloud from "@/assets/cloud.png";
import Clear from "@/assets/clear.png";
import Drizzle from "@/assets/drizzle.png";
import Rain from "@/assets/rain.png";
import Snow from "@/assets/snow.png";
import Image from "next/image";
import Spinner from "@/components/Spinner";

export default function Forecast() {
  const [location, setLocation] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherState>({
    temp: "--",
    location: "Lagos",
    description: "Mostly Cloudy",
    icon: Cloud,
  });

  // WEATHER API

  const api = process.env.NEXT_PUBLIC_WEATHER_API;

  const fetchData = async (searchLocation: string) => {
    if (!searchLocation.trim()) {
      setError("Search a Location !");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const api_url = `${
        process.env.NEXT_PUBLIC_WEATHER_API_URL
      }?q=${encodeURIComponent(searchLocation)}&appid=${api}&units=metric`;

      const res = await fetch(api_url);

      if (!res.ok) {
        if (res.status === 404) {
          setError("Enter a valid Location");
        } else {
          setError("Please Try Again...");
        }

        return;
      }

      const data = await res.json();

      const iconCode = data.weather[0].icon;
      const weatherIcon = getWeatherIcon(iconCode);

      setWeatherData({
        temp: Math.floor(data.main.temp).toString(),
        location: data.name,
        description: data.weather[0].description,
        icon: weatherIcon,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // EVENT HANDLERS

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);

    setError(""); //Clears Error When User Types
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetchData(location);
  };

  return (
    <section className="w-full py-10 ">
      <div className="flex flex-col items-center justify-center mx-10 font-inter">
        <h1 className=" font-bold text-center text-2xl md:text-5xl leading-snug mb-3">
          Search for Weather and Get Outfit Recommendations!
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Find Out What to Wear for Every <strong>Weather</strong>
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-2/4 flex items-center justify-center my-5"
        >
          <input
            type="text"
            id="locationName"
            placeholder="Search Location"
            value={location}
            onChange={handleInput}
            disabled={loading}
          />

          <Button
            type="submit"
            variant="secondary"
            size="md"
            className="p-2 md:p-4 outline:none"
            disabled={loading}
          >
            <HiSearch className="font-extrabold" />
          </Button>
        </form>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* WEATHER */}
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col items-center justify-center mt-5">
            <Image src={weatherData.icon} className="w-25" alt="weather-icon" />
            <h3 className="text-6xl text-center">
              {weatherData.temp}
              <sup>o</sup>C
            </h3>
            <h3 className="text-4xl text-center">{weatherData.location}</h3>
            <p>
              <i>{weatherData.description}</i>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

interface WeatherState {
  temp: string;
  location: string;
  description: string;
  icon: any;
}

const getWeatherIcon = (iconCode: string) => {
  const iconMap: { [key: string]: any } = {
    // Clear sky
    "01d": Clear,
    "01n": Clear,

    // Few clouds
    "02d": Cloud,
    "02n": Cloud,

    // Scattered clouds / broken clouds
    "03d": Cloud,
    "03n": Cloud,
    "04d": Cloud,
    "04n": Cloud,

    // Shower rain / rain
    "09d": Rain,
    "09n": Rain,
    "10d": Rain,
    "10n": Rain,

    // Snow
    "13d": Snow,
    "13n": Snow,
  };

  // Return the mapped icon or fallback to Cloud
  return iconMap[iconCode] || Cloud;
};
