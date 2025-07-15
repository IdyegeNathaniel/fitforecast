"use client"

import Image from "next/image"
import Logo from "@/assets/FitForecast.png"
import { useState, useEffect } from "react"
import { FaMoon, FaSun } from "react-icons/fa"
import { useTheme } from "next-themes"

const Header: React.FC = () => {

  const {theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true)
  }, [])
  

  return (
    <header className="w-full flex items-center justify-between h-20 border-b border-gray-300 shadow-md">
      <nav className="mx-10">
        <Image src={Logo} className="w-25 md:w-auto h-15" alt="LOGO" />
      </nav>

      <div className="mx-10">
        { mounted &&
        <button className="cursor-pointer" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {
            theme === 'dark' ? <FaSun className="text-nature-green" /> : <FaMoon className="text-nature-green" />
          }
        </button>}
      </div>


    </header>
  ) 
}

export default Header