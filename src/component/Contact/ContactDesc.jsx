import { motion } from "motion/react";
import contactHeadImg from "../../data/images/ContactHeadPng.png";
import ConnectLinks from "../ConnectLinks";

export default function ContactDesc(){

    return(<>
            
        <section className="flex items-center justify-center gap-56">
            <div>
                <h1 className="mb-4 text-4xl font-bold text-left text-white font-railway">Let's build <br /> something amazing <br /> <b className="text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-500 to-purple-700 bg-clip-text">together!</b></h1>
            
                <p className="mb-6 text-left text-gray-500">Feel free to reach out for collaborations, <br /> project discussions, or just to connect. <br />I’m always open to exploring new opportunities and ideas.</p>

                <ConnectLinks />
            </div>
            <motion.img initial={{ opacity: 0, scale: 1.2 }} animate={{opacity: 1, scale:1}} className="w-[30rem]" src={contactHeadImg} alt="" />
        </section>
        
        </>)

}