'use-client'

import Cloud from "@/assets/cloud.png";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

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
        if(res.status === 404 ){
            setError("Enter a valid Location");
        }else {
            setError("Please Try Again...")
        }

        return
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


  export function useWeatherData(location : string){
    return useQuery({
        queryKey: ['weather', location],
        queryFn: () => fetchData(location),
        staleTime: 10 * 60 * 1000,
        enabled: !!location
    })
  }