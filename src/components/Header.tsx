import Image from "next/image"
import Logo from "@/assets/FitForecast.png"

const Header: React.FC = () => {
  return (
    <header className="w-full flex items-center justify-start h-20 border-b border-gray-300 shadow-md">
      <nav className="mx-10">
        <Image src={Logo} className="w-auto h-15" alt="LOGO"/>
      </nav>
    </header>
  )
}

export default Header