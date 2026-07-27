import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LetsConnectButton from "../buttons/LetsConnectButton";

export default function ProjectConnectBtn(){
    return(<>
        <div className="flex flex-col justify-between w-full px-4 py-2 border border-purple-700 md:flex-row md:py-5 md:px-10 bg-purple-950 bg-opacity-20 rounded-2xl">
                <div className="flex gap-4 mb-2 font-mono text-left text-white md:mb-0">
                    <FontAwesomeIcon icon={faRocket} className="px-2 py-2 text-xl text-white border border-purple-500 rounded-full md:py-5 md:p-4 md:text-4xl bg-purple-600/10"/>
                    <div className="flex flex-col">
                        <h1 className="font-semibold text-left text-md md:m-2 md:text-4xl" >Have a project in mind?</h1>
                        <p className="text-sm font-normal text-left text-gray-500 md:text-xl">I am always open to new opportunities and exciting projects</p>
                        </div>
                </div>    
                        
                <LetsConnectButton />
            </div>
    </>)
}