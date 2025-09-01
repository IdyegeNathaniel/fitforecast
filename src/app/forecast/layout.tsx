"use state"

import { useState } from "react";
import Forecast from "./page";
import FitRecommendation from "./@recommendation/page";


interface WeatherInfo{
  temp: number;
  description: string;
}
export default function ForecastLayout({
  children,
  recommendation,
}: {
  children: React.ReactNode;
  recommendation: React.ReactNode;
}){

  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);

  const handleWeatherUpdate = (data: WeatherInfo) => {
    setWeatherInfo(data)
  }
  return (
      <div>
        \
        <div> <Forecast onWeatherUpdate={handleWeatherUpdate} /> </div>
        <div className="flex flex-col justify-center items-center">
        <div> <FitRecommendation temp={weatherInfo?.temp || 0}
          description={weatherInfo?.description || ''} /> </div>
        </div>
      </div>
  );

}
