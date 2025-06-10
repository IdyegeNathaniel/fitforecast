"use client"

import Image from "next/image";
import Climate from "@/assets/climate.png"
import Button from "@/components/Button";
import { HiArrowRight } from "react-icons/hi";
import { useRouter } from "next/navigation";



export default function Home() {

  const router = useRouter()
  return (
    <section className="py-20 md:py-0">
      <div className="flex flex-col-reverse md:flex-row gap-5 justify-center items-center mx-10 py-10">
        <div className="w-full md:w-1/2 h-2/3  text-[min(5vw,36px)] font-bold leading-tight font-Outfit p-2 md:p-5">
          <h2 className="bg-gradient-to-r from-nature-green from-20% via-green-600 via-30% to-green-800 to-50 bg-clip-text text-transparent text=extrabold">Welcome to FitForecast.</h2>
          <p>Dress for The Weather Every Time. Get Personalized Outfit Suggestions Based on Your Location&#39;s Weather Forecast.</p>
          <Button size="lg" className="my-5 flex items-center justify-center gap-2 font-bold" onClick={() => router.push('/forecast')}>Get Started <HiArrowRight className="text-sm" /> </Button>
        </div>
        <div className="w-full md:w-1/2">
          <Image src={Climate} alt="climate" />
        </div>
      </div>
    </section>
  );
}

