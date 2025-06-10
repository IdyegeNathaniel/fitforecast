"use client"

import Image from "next/image"
import Logo from "@/assets/FitForecast.png"
import { useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa"

const Header: React.FC = () => {

  const [dark, setDark] = useState(true)

  return (
    <header className="w-full flex items-center justify-between h-20 border-b border-gray-300 shadow-md">
      <nav className="mx-10">
        <Image src={Logo} className="w-auto h-15" alt="LOGO" />
      </nav>
      <nav className="mx-10">
        {
          dark ? <FaSun className="text-nature-green" /> : <FaMoon className="text-nature-green" />
        }
      </nav>


    </header>
  )
}

export default Header