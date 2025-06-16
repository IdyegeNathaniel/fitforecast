"use client"

import Image from "next/image"
import Logo from "@/assets/FitForecast.png"
import { useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa"

const Header: React.FC = () => {

  const [dark, setDark] = useState(false)

  return (
    <header className="w-full flex items-center justify-between h-20 border-b border-gray-300 shadow-md">
      <nav className="mx-10">
        <Image src={Logo} className="w-25 md:w-auto h-15" alt="LOGO" />
      </nav>
      <button className="mx-10 cursor-pointer" onClick={() => setDark( prev => !prev )}>
        {
          dark ? <FaSun className="text-nature-green" /> : <FaMoon className="text-nature-green" />
        }
      </button>


    </header>
  ) 
}

export default Header