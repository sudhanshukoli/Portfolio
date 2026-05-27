import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LetsConnectButton from "../buttons/LetsConnectButton";
import AboutDesc from "./AboutDesc";
import AboutJourney from "./AboutJourney";
import AboutSkills from "./AboutSkills";

export default function About(){

    return(<>
            <section className="flex flex-col items-center justify-center w-screen h-full gap-10 px-48 pb-20 overflow-hidden shadow-xl">
                <AboutDesc />
                
                <div className="flex justify-center w-screen h-full gap-8 ">
                    <AboutSkills />
                    <AboutJourney />
                </div>
                
                <div className="flex justify-center w-full gap-2 p-10 border border-purple-700 bg-purple-950 bg-opacity-20 rounded-2xl">
                    <FontAwesomeIcon icon={faPaperPlane} className="w-8 h-8 p-4 text-white border border-purple-500 rounded-full bg-purple-950"/>
                    <div className="flex flex-col font-mono text-left text-white">
                        <h1 className="m-2 text-2xl font-semibold text-left" >I am always open to new opportunities and exciting projects <br /></h1>
                        <p className="font-normal text-left ">Let's build something amazing together! <LetsConnectButton /> </p>
                    </div>
                </div>
            </section>
        </>)
}