import { faCircle as faCircleSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { aboutData } from "../../data/AboutPageData";
import backendPng from "../../data/images/BackendPng.png";
import frontendPng from "../../data/images/FrontendPng.png";
import databasePng from "../../data/images/databasePng.png";
import languagesPng from "../../data/images/languagesPng.png";

export default function AboutSkills(){

    const sectionCss = "w-full h-full text-white border flex flex-col gap-2 font-railway bg-purple-950 bg-opacity-20 border-purple-700 rounded-2xl"

    return(<>
        <section className={`${sectionCss} p-5 md:p-10 md:py-14`}>
            <div className="text-left">
                <h1 className=""><FontAwesomeIcon icon={faCircleSolid} className="w-3 h-3 mr-2 text-2xl text-purple-500"/>What I do</h1>
                <p className="md:mb-6 text-xs px-4 md:pt-4 md:px-4 md:text-[16px] text-gray-500">{aboutData.quote}</p>
            </div>

            <div>
                <div className="flex items-start justify-start">
                    <img className="w-14 md:w-20" src={frontendPng} alt="frontend" /> <h1 className="self-center text-sm text-left md:text-xl">Frontend Development <p className="text-xs text-gray-500 md:text-sm">{aboutData.frontend}</p></h1>  
                </div>
                
                <div className="flex items-start justify-start">
                    <img className="w-14 md:w-20" src={backendPng} alt="frontend" /> <h1 className="self-center text-sm text-left md:text-xl">Backend Development <p className="text-xs text-gray-500 md:text-sm">{aboutData.backend}</p></h1>  
                </div>

                <div className="flex items-start justify-start">
                    <img className="w-14 md:w-20" src={databasePng} alt="frontend" /> <h1 className="self-center text-sm text-left md:text-xl">Database <p className="text-xs text-gray-500 md:text-none">{aboutData.database}</p></h1>  
                </div>

                <div className="flex items-start justify-start">
                    <img className="w-14 md:w-20" src={languagesPng} alt="frontend" /> <h1 className="self-center text-sm text-left md:text-xl">Languages <p className="text-xs text-gray-500 md:text-sm">{aboutData.codeLanguages}</p></h1>  
                </div>
            </div>
        </section>
    </>)
}