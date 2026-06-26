import { faCakeCandles, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "motion/react";
import { aboutData } from "../../data/AboutPageData";
import aboutMeMyPng from "../../data/images/aboutMeMyPng.png";
import ResumeButton from "../buttons/ResumeButton";

export default function AboutDesc(){

    return(<>

        <section className="flex items-center justify-center gap-52">
            <div className="w-full">
                <h1 className="mb-4 text-4xl font-bold text-left text-white font-railway">About <b className="text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-500 to-purple-700 bg-clip-text">Me</b><p className="text-xl font-semibold text-white">{`${aboutData.subtitle} <>`}</p></h1>
                
                <p className="mb-6 text-left text-gray-500">{aboutData.description}</p>

                <section className="w-full my-8 text-gray-500">
                    <div className="flex gap-4">
                        <div className="flex">
                            <FontAwesomeIcon icon={faLocationDot} className="self-center text-3xl text-purple-700" /> <h1 className="text-left"> <i className="text-white">India</i><br /> location </h1>
                        </div>
                        <div className="flex">
                            <FontAwesomeIcon icon={faEnvelope} className="self-center pr-2 text-3xl text-purple-700" /> <h1 className="text-left"> <i className="text-white">kolisudhanshu@gmail.com</i><br /> Email </h1>
                        </div>
                        <div className="flex">
                            <FontAwesomeIcon icon={faCakeCandles} className="self-center text-3xl text-purple-700" /> <h1 className="text-left"> <i className="text-white">21/04/2001</i><br /> Birthday </h1>
                        </div>
                    </div>
                </section>
                <div className="text-left">
                    <ResumeButton />
                </div>
            </div>
            <motion.img initial={{ opacity: 0, scale: 1.2 }} animate={{opacity: 1, scale:1}} className="w-[30rem]" src={aboutMeMyPng} alt="" />
        </section>
        
    </>)

}