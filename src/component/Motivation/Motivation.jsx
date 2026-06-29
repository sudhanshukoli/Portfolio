import MainMotivation from "./MainMotivation";
import MotivationHeader from "./MotivationHeader";

export default function Motivation(){
    return(<>
        <section className="flex flex-col items-center justify-center w-full h-full gap-10 pt-20 pb-20 overflow-hidden shadow-xl px-28">
            <MotivationHeader />
            <div className="flex flex-col w-full gap-10 p-8 border bg-gray-700/10 border-gray-600/50 rounded-2xl">
                <MainMotivation />
            </div>
        </section>
    </>)
}