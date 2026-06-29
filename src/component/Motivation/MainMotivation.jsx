import MotivationData, { DailyMotivationData } from "../../data/MotivationData";
import DailyMotivationCard from "./DailyMotivationCard";
import MotivationCard from "./MotivationCard";
import MotivationLines from "./MotivationLines";
import MotivationThoughtCard from "./MotivationThoughtCard";

export default function MainMotivation(){
    return(<>
        <h1 className="text-xl text-center text-purple-500">WHAT KEEPS ME GOING</h1>
        <div className="flex flex-row justify-between w-full">
            {MotivationData.map((theData, index) => (
                <MotivationCard theData={theData} />
            ))}
        </div>

        <div className="flex flex-row justify-start w-full gap-20 ">
            <MotivationThoughtCard />
            <MotivationLines />
        </div>
            
        <h1 className="text-xl text-center text-purple-500">MY DAILY REMINDERS</h1>
        <div className="flex flex-row justify-between w-full">
            {DailyMotivationData.map((dailyMotivation, index) => (
                <DailyMotivationCard key={index} dailyMotivation={dailyMotivation}/>
            ))}
        </div>    
    </>)
}