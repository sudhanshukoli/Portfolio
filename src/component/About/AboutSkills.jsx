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
        <section className={`${sectionCss} h-[25rem] p-10 py-14`}>
            <div className="text-left">
                <h1 className="mb-4"><FontAwesomeIcon icon={faCircleSolid} className="w-3 h-3 mr-2 text-2xl text-purple-500"/>What I do</h1>
                <p className="mb-6 text-left text-gray-50">{aboutData.quote}</p>
            </div>

            <div>
                <div className="flex items-start justify-start">
                    <img className="w-20" src={frontendPng} alt="frontend" /> <h1 className="self-center text-left">Frontend Development <p className="text-gray-500">{aboutData.frontend}</p></h1>  
                </div>
                
                <div className="flex items-start justify-start">
                    <img className="w-20" src={backendPng} alt="frontend" /> <h1 className="self-center text-left">Backend Development <p className="text-gray-500">{aboutData.backend}</p></h1>  
                </div>

                <div className="flex items-start justify-start">
                    <img className="w-20" src={databasePng} alt="frontend" /> <h1 className="self-center text-left">Database <p className="text-gray-500">{aboutData.database}</p></h1>  
                </div>

                <div className="flex items-start justify-start">
                    <img className="w-20" src={languagesPng} alt="frontend" /> <h1 className="self-center text-left">Languages <p className="text-gray-500">{aboutData.codeLanguages}</p></h1>  
                </div>
            </div>
        </section>
    </>)
}