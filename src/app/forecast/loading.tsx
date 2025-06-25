import Spinner from "@/components/Spinner";

export default function LoadingState (){
    return(
        <div className="w-full h-screen flex justify-center items-center">
            <Spinner />
        </div>
    )
}