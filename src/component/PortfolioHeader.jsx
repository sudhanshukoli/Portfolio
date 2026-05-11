import { motion } from "motion/react";
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
            <ul className="flex flex-row gap-6 text-xl font-bold font-playwriteRegular">
                <li>hOme</li>
                <li>rEsume</li>
                <li>iNterests</li>
                <li>cOntact</li>
            </ul>
        </motion.div>

    </div>

    </>)
}