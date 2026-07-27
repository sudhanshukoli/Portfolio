import { faCakeCandles, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "motion/react";
import { aboutData } from "../../data/AboutPageData";
import aboutMeMyPng from "../../data/images/aboutMeMyPng.png";
import ResumeButton from "../buttons/ResumeButton";

export default function AboutDesc(){

    return(<>

        <section className="flex flex-col items-center justify-center w-full md:flex-row md:gap-52">
            <div className="w-full">
                <div className="flex items-center">
                    <div>
                        <h1 className="text-xl font-bold text-left text-white md:mb-4 md:text-4xl font-railway">About <b className="text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-500 to-purple-700 bg-clip-text">Me</b><p className="text-xs font-semibold text-white md:text-xl">{`${aboutData.subtitle} <>`}</p></h1>
                        <p className="md:mb-6 text-[8px] text-left text-gray-500 md:text-sm">{aboutData.description}</p>
                    </div>
                    
                    <motion.img initial={{ opacity: 0, scale: 1.2 }} animate={{opacity: 1, scale:1}} className="md:hidden w-[10rem]" src={aboutMeMyPng} alt="" />
                </div>
                


                <section className="w-full mb-4 text-gray-500 md:my-8">
                    <div className="flex gap-2 md:gap-4">
                        <div className="flex">
                            <FontAwesomeIcon icon={faLocationDot} className="self-center text-[18px] text-purple-700 md:text-3xl" /> <h1 className="text-[10px] text-left md:text-sm"> <i className="text-white">India</i><br /> location </h1>
                        </div>
                        <div className="flex">
                            <FontAwesomeIcon icon={faEnvelope} className="self-center pr-2 text-[18px] text-purple-700 md:text-3xl" /> <h1 className="text-[10px] text-left md:text-sm"> <i className="text-white">kolisudhanshu@gmail.com</i><br /> Email </h1>
                        </div>
                        <div className="flex">
                            <FontAwesomeIcon icon={faCakeCandles} className="self-center text-[18px] text-purple-700 md:text-3xl" /> <h1 className="text-[10px] text-left md:text-sm"> <i className="text-white">21/04/2001</i><br /> Birthday </h1>
                        </div>
                    </div>
                </section>
                <div className="mb-4 text-left">
                    <ResumeButton />
                </div>
            </div>
            <motion.img initial={{ opacity: 0, scale: 1.2 }} animate={{opacity: 1, scale:1}} className="md:block hidden w-[30rem]" src={aboutMeMyPng} alt="" />
        </section>
        
    </>)

}