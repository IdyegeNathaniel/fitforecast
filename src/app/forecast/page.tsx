"use client"

import Button from "@/components/Button"
import { useState } from "react"
import { HiSearch } from "react-icons/hi"
import Cloud from '@/assets/cloud.png'
import Image from "next/image"

export default function Forecast() {

    const [location, setLocation] = useState("");

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => { setLocation(e.target.value) };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault() } 

    return <section className="w-full py-20">
        <div className="flex flex-col items-center justify-center mx-10 font-inter">
            <h1 className=" font-bold text-center text-base md:text-5xl leading-snug mb-3">Search for Weather and Get Fit Recommendations!</h1>
            <p className="text-gray-500 text-sm md:text-base">Find Out What to Wear for Every Weather</p>
            <form onSubmit={handleSubmit} className="w-2/4 flex items-center justify-center my-5">
                
                    <input type="text" placeholder="Input Location" value={location} onChange={handleInput} />
                    <datalist />
                    <Button type="submit" variant="secondary" size="md" className="md:p-4">
                        <HiSearch className="font-extrabold" />
                    </Button>
                
            </form>

            {/* WEATHER */}

            <div className="flex flex-col items-center justify-center mt-5">
                <Image src={Cloud} className='w-25' alt="weather-icon" />
                <h3 className="text-6xl text-center">30 <sup>o</sup>C</h3>
                <h3 className="text-4xl text-center">Lagos</h3>
            </div>
        </div>
    </section>
}

