import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LetsConnectButton from "../buttons/LetsConnectButton";

export default function ProjectConnectBtn(){
    return(<>
        <div className="flex justify-between w-full px-10 py-5 border border-purple-700 bg-purple-950 bg-opacity-20 rounded-2xl">
                <div className="flex gap-4 font-mono text-left text-white">
                    <FontAwesomeIcon icon={faRocket} className="p-4 py-5 text-4xl text-white border border-purple-500 rounded-full bg-purple-600/10"/>
                    <div className="flex flex-col">
                        <h1 className="m-2 text-4xl font-semibold text-left" >Have a project in mind?</h1>
                        <p className="font-normal text-left text-gray-500">I am always open to new opportunities and exciting projects</p>
                        </div>
                </div>    
                        
                <LetsConnectButton />
            </div>
    </>)
}