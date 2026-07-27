import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectCard({cardData}){
    const btnCss = "md:p-3 md:m-2 m-1 p-1 text-xs md:text-sm text-white border border-purple-700 font-railway rounded-xl"
    
    return(<>
        <section className="flex flex-col md:w-[20rem] items-center p-2 md:p-4 text-white border-2 rounded-2xl border-purple-600/50 bg-gray-600/10">
            <img src={cardData.image} alt="bgInterview" className="mb-4 border rounded-2xl border-gray-600/30" />
                    
             <div className="flex justify-start w-full gap-2 p-1 text-xl text-white md:p-2">
                <FontAwesomeIcon className="text-sm text-purple-600 md:text-2xl" icon={cardData.icon} />
                <h1 className="text-xs font-bold md:text-xl">{cardData.title}</h1>
            </div>

            <p className="w-full h-[4rem] md:h-full overflow-auto p-2 text-xs text-gray-400 md:text-sm">{cardData.desc}</p>
            
            <div className="flex flex-col w-full md:flex-row">
                <button onClick={() => window.open(cardData.sourceLink, '_blank')} 
                className={`${btnCss} bg-transparent from-purple-950 to-purple-500 hover:bg-gradient-to-tr`}>
                    <FontAwesomeIcon icon={faGithub} />Source Code</button>
                    
                <button onClick={() => window.open(cardData.demoLink, '_blank')} 
                className={`${btnCss} from-purple-950 to-purple-500 bg-gradient-to-tr hover:from-transparent hover:to-transparent `}>
                    <FontAwesomeIcon icon={faArrowUpRightDots} />Live Demo</button>                
            </div>
        </section>
    </>)
}