import { motion } from "motion/react";
import { NavLink } from "react-router";
import cvPic from "../data/images/bwCvPng.png";

export default function PortfolioHeader(){

    const onActiveNavCss = "bg-gradient-to-r from-violet-400 underline underline-offset-4 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent";

    const today = new Date();

    const day = today.toLocaleString("en-US", {
        weekday: "long",
    });

    const formattedDate = today.toLocaleDateString("en-IN");

    return(<>
    
    <div className="flex h-[5rem] z-20 w-full flex-row justify-center pt-4 sticky top-0 ">
        <motion.div initial={{x: -200, opacity: 0}} transition={{duration: 1, ease: "easeInOut"}} animate={{x: 0, opacity: 1}}
                    className="flex flex-row  h-[5rem] content-center bg-black-500 border-r-0 pr-10 rounded-l-2xl border-purple-700 border bg-opacity-40 shadow-[0_0_60px_rgba(147,51,234,0.35)]">
            <div initial={{opacity: 0}} transition={{duration: 1, ease: "easeInOut"}} animate={{ opacity: 1}} className="h-[5rem] w-[5rem] self-start bg-center bg-cover " 
                    style={{ backgroundImage: `url(${cvPic})`,
                            WebkitMaskImage: "radial-gradient(ellipse 100% 100% at left, black 60%, transparent 100%)" }}>
            </div>
            <h1 className="content-center text-2xl text-white font-playwriteRegular ">Sudhanshu Koli</h1>
        </motion.div>

        <motion.div initial={{y: -100, opacity: 0}} transition={{duration: 1, ease: "easeInOut"}} animate={{y: 0, opacity: 1}}
                    className=" h-[5rem] content-center bg-black-500 px-10 border-r-0 border-l-0 border-purple-700 border bg-opacity-40 shadow-[0_0_60px_rgba(147,51,234,0.35)]">
            <nav className="flex text-2xl text-white font-railway ">
                <NavLink whileHover={{scale: 1.1}} to="/" className={({isActive})=>`cursor-pointer px-6 mx-4 ${isActive ? onActiveNavCss : ""} `}>Home</NavLink>
                <button className="px-6 mx-4" onClick={()=> window.open("/pdfs/sudhanshu.pdf")} >Resume</button>
                <NavLink to="/interests" className={({isActive})=>`cursor-pointer px-6 mx-4 ${isActive ? onActiveNavCss : ""} `}>Interests</NavLink>
                <NavLink to="/contact" className={({isActive})=>`cursor-pointer px-6 mx-4 ${isActive ? onActiveNavCss : ""} `}>Contact</NavLink>
            </nav>
        </motion.div>

        <motion.div initial={{x: 200, opacity: 0}} transition={{duration: 1, ease: "easeInOut"}} animate={{x: 0, opacity: 1}}
                    className="flex flex-row items-center gap-2 pr-4 font-playwriteRegular text-white  h-[5rem] content-center bg-black-500 px-10 border-l-0 rounded-r-2xl border-purple-700 border bg-opacity-40 shadow-[0_0_60px_rgba(147,51,234,0.35)]">
            <h1>{day}</h1>
            <p>{formattedDate}</p>
        </motion.div>

    </div>

    </>)
}