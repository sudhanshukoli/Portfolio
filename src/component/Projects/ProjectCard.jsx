import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectCard({cardData}){
    const btnCss = "p-3 m-2 text-sm text-white border border-purple-700 font-railway rounded-xl"
    
    return(<>
        <section className="flex flex-col w-[20rem] items-center p-4 text-white border-2 rounded-2xl border-purple-600/50 bg-gray-600/10">
            <img src={cardData.image} alt="bgInterview" className="mb-4 border rounded-2xl border-gray-600/30" />
                    
             <div className="flex justify-start w-full gap-2 p-2 text-xl text-white">
                <FontAwesomeIcon className="text-purple-600" icon={cardData.icon} />
                <h1 className="font-bold">{cardData.title}</h1>
            </div>

            <p className="w-full p-2 text-sm text-gray-400 ">{cardData.desc}</p>
            
            <div className="flex w-full">
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