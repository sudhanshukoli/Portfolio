import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ResumeButton(){

    return(<>
        <button onClick={() => window.open("/pdfs/sudhanshu.pdf")} className="self-end p-3 font-semibold text-white w-[15rem] bg-transparent border border-purple-700 from-purple-950 to-purple-500 hover:bg-gradient-to-tr font-railway rounded-xl">Download Resume <FontAwesomeIcon className="text-2xl" icon={faDownload} /></button>
    </>)

}