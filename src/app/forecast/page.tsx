"use client"

import Button from "@/components/Button"
import { useState } from "react"
import { HiSearch } from "react-icons/hi"
import Cloud from '@/assets/cloud.png'
import Image from "next/image"




export default function Forecast() {

    const [location, setLocation] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [weatherData, setWeatherData] = useState({
        temp: "30",
        location: "Lagos",
        description: "Mostly Cloudy",
        icon: Cloud,
    })


    // WEATHER API

    const api = process.env.NEXT_PUBLIC_WEATHER_API

    const fetchData = async (searchLocation: string) => {

        if (!searchLocation.trim()) {
            setError("Search a Location");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const api_url = `${process.env.NEXT_PUBLIC_WEATHER_API_URL}?q=${encodeURIComponent(searchLocation)}&appid=${api}&units=metric`;

            const res = await fetch(api_url)

            if (!res.ok) {
                throw new Error("Data not resolved")
            }

            const data = await res.json();

            setWeatherData({
                temp: Math.floor(data.main.temp).toString(),
                location: data.name,
                description: data.weather[0].description,
                icon: Cloud
            })



        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    // EVENT HANDLERS

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value);

        setError(""); //Clears Error When User Types
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await fetchData(location)

    };



    return (
        <section className="w-full py-20 ">
            <div className="flex flex-col items-center justify-center mx-10 font-inter">
                <h1 className=" font-bold text-center text-base md:text-5xl leading-snug mb-3">Search for Weather and Get Fit Recommendations!</h1>
                <p className="text-gray-500 text-sm md:text-base">Find Out What to Wear for Every Weather</p>

                <form onSubmit={handleSubmit} className="w-2/4 flex items-center justify-center my-5">

                    <input type="text" id='locationName' placeholder="Search Location" value={location} onChange={handleInput} disabled={loading} />

                    <Button type="submit" variant="secondary" size="md" className="md:p-4 outline:none" disabled={loading}>
                        {loading ? "......" : <HiSearch className="font-extrabold" />}
                    </Button>

                </form>
                {error && (<p className="text-red-500 text-sm mb-4">{error}</p>)}

                {/* WEATHER */}

                <div className="flex flex-col items-center justify-center mt-5">
                    <Image src={weatherData.icon} id="atm-icon" className='w-25' alt="weather-icon" />
                    <h3 id="atm-temp" className="text-6xl text-center">{weatherData.temp}<sup>o</sup>C</h3>
                    <h3 id="atm-location" className="text-4xl text-center">{weatherData.location}</h3>
                    <p id="atm-desc"><i>{weatherData.description}</i></p>
                </div>
            </div>
        </section>
    )
}

