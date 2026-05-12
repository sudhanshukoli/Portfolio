import { motion } from "motion/react";
import { NavLink } from "react-router";
import cvPic from "../data/images/cv_pic.png";

export default function PortfolioHeader(){
    return(<>
    
    <div className="flex h-[5rem] w-full flex-row justify-between pt-2  sticky top-0">
        <div className="flex flex-row">
            <motion.div initial={{opacity: 0}} transition={{duration: 1, ease: "easeInOut"}} animate={{ opacity: 1}} className="h-[5rem] w-[5rem] bg-center bg-cover " 
                    style={{ backgroundImage: `url(${cvPic})`,
                            WebkitMaskImage: "radial-gradient(ellipse 100% 100% at left, black 60%, transparent 100%)" }}>
            </motion.div>
            <motion.h1 initial={{y: -100, opacity: 0}} transition={{duration: 1, ease: "easeInOut"}} animate={{y: 0, opacity: 1}} className="content-center text-2xl font-bold underline font-playwriteRegular decoration-solid underline-offset-8 ">Sudhanshu Koli</motion.h1>
        </div>

        <motion.div initial={{y: -100, opacity: 0}} transition={{duration: 1, ease: "easeInOut"}} animate={{y: 0, opacity: 1}} className=" h-[5rem] mr-4 content-center">
            <nav className="flex flex-row gap-6 text-2xl font-sairaBold drop-shadow-2xl">
                <NavLink whileHover={{scale: 1.1}} to="/home" className={({isActive})=>`cursor-pointer ${isActive? " underline decoration-solid underline-offset-8" : ""} `}>Home</NavLink>
                <button className={({isActive})=>`${isActive? " underline decoration-solid underline-offset-8" : ""} `} onClick={()=> window.open("/pdfs/sudhanshu.pdf")} >Resume</button>
                <NavLink to="" className={({isActive})=>`cursor-pointer ${isActive? " underline decoration-solid underline-offset-8" : ""} `}>Interests</NavLink>
                <NavLink to="" className={({isActive})=>`cursor-pointer ${isActive? " underline decoration-solid underline-offset-8" : ""} `}>Contact</NavLink>
            </nav>
        </motion.div>

    </div>

    </>)
}