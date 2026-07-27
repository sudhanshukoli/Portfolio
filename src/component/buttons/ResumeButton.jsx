import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ResumeButton(){

    return(<>
        <button onClick={() => window.open("/pdfs/sudhanshu.pdf")} className="self-end md:p-3 p-2 font-semibold text-white md:w-[15rem] w-[8rem] bg-transparent border border-purple-700 from-purple-950 to-purple-500 hover:bg-gradient-to-tr font-railway rounded-xl text-[10px] md:text-xl">Download Resume <FontAwesomeIcon className="md:text-2xl" icon={faDownload} /></button>
    </>)

}