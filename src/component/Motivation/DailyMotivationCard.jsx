import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DailyMotivationCard({dailyMotivation}){
    return(<>
        <section className="flex w-[18rem] items-center p-4 text-white border-2 rounded-2xl border-purple-600/50 bg-gray-600/10">
            <FontAwesomeIcon className="px-6 text-4xl text-purple-600" icon={dailyMotivation.icon} />
            <h1>{dailyMotivation.line}</h1>
        </section>
    </>)
}