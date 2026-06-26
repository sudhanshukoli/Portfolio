import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faDownload, faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";

export default function LearnDataCard({ learnData }){

    console.log("data here " + learnData);

    const openPdf = (filePath)=>{
        window.open(filePath);
    }

    const downloadPdf = (pdfFile)=>{
        const link = document.createElement("a");
        link.href = pdfFile.fil;
        link.download = pdfFile.desc + ".pdf";
        link.click();
    }

    const btnCss = "p-3 m-2 text-sm text-white w-[8rem] border border-purple-700 font-railway rounded-xl"

    return(<>
        <motion.section whileHover={{scale: 1.05, backgroundColor: "transparent", borderColor: "#9A1FC2"}} transition={{ duration: 0.2 }}
            className="flex flex-col items-center p-4 text-white border border-gray-600 cursor-pointer bg-gray-600/20 rounded-2xl">
            <div className="flex">
                <div>
                    <FontAwesomeIcon className="text-6xl text-purple-800" icon={faFilePdf} />
                </div>
                <div className="p-2">  
                    <h1 className="p-1 text-xl font-bold text-center text-purple-400 border border-purple-500 rounded-md bg-purple-800/30 ">
                        {learnData.title}</h1>
                    <p className="p-2 text-gray-400">{learnData.desc}</p>
                </div>
            </div>

            <div>
                <button onClick={() => openPdf(learnData.file)} className={`${btnCss} from-purple-950 to-purple-500 bg-gradient-to-tr hover:from-transparent hover:to-transparent `}>View <FontAwesomeIcon className="text-xl" icon={faExpand} /></button>
                <button onClick={() => downloadPdf(learnData) } className={`${btnCss} bg-transparent from-purple-950 to-purple-500 hover:bg-gradient-to-tr`}>Download <FontAwesomeIcon className="text-2xl" icon={faDownload} /></button>
            </div>

        </motion.section>
    </>)
}