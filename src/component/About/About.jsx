import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LetsConnectButton from "../buttons/LetsConnectButton";
import AboutDesc from "./AboutDesc";
import AboutJourney from "./AboutJourney";
import AboutSkills from "./AboutSkills";

export default function About(){

    return(<>
            <section className="flex flex-col items-center justify-center w-full h-full px-8 pt-10 overflow-hidden shadow-xl md:pb-20 md:pt-20 md:gap-2 md:px-28">
                <AboutDesc />
                
                <div className="flex flex-col justify-center w-full h-full gap-4 md:gap-8 md:flex-row ">
                    <AboutSkills />
                    <AboutJourney />
                </div>
                
                <div className="flex justify-center w-full p-5 my-4 border border-purple-700 md:gap-2 md:p-10 bg-purple-950 bg-opacity-20 rounded-2xl">
                    <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4 p-2 text-white border border-purple-500 rounded-full md:p-4 md:h-8 md:w-8 bg-purple-950"/>
                    <div className="flex flex-col font-mono text-left text-white">
                        <h1 className="m-2 text-xs font-semibold text-left md:text-4xl" >I am always open to new opportunities and exciting projects <br /></h1>
                        <p className="pb-2 text-xs font-normal text-center md:text-left md:text-xl">Let's build something amazing together! <LetsConnectButton /> </p>
                    </div>
                </div>
            </section>
        </>)
}