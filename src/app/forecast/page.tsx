import Button from "@/components/Button"
import { HiSearch } from "react-icons/hi"

export default function Forecast() {
    return <section className="w-full py-20">
        <div className="flex flex-col items-center justify-center mx-10">
            <h1 className=" font-bold text-center text-base md:text-5xl font-bold leading-snug mb-3">Search for Weather and Get Fit Recommendation!</h1>
            <p className="text-gray-500 text-sm md:text-base">Find Out What to Wear for Every Weather</p>
            <div className="w-2/4 flex items-center justify-center my-5">
                <input type="text" placeholder="Input Location" className="w-full text-sm md: text-xl p-2 border border-gray-500 rounded-l-md outline-none " />
                <Button variant="secondary" size="md" className="md:p-4">
                    <HiSearch className="font-extrabold" />
                </Button>
            </div>
        </div>
    </section>
}

