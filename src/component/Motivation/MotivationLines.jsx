import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MotivationLinesData } from "../../data/MotivationData";

export default function MotivationLines(){
    return(<>
        <section>
            <h1 className="py-6 text-2xl text-purple-600">WHAT I BELIEVE IN</h1>
            {MotivationLinesData.map((theLine, index) => (
                <div className="flex items-center gap-4 py-2 text-white">
                    <FontAwesomeIcon className="text-2xl text-purple-600" icon={faCircleCheck} />
                    <h1 className="text-xl">{theLine.line}</h1>
                </div>
            ))}
        </section>
    </>)
}