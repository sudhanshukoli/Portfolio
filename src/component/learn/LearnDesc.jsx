import { motion } from "motion/react"
import learnPdfImg from "../../data/images/learnPdfImg.png"

export default function LearnDesc(){
    return(<>
            
        <section className="flex items-center py-16">
            <div>
                <h1 className="mb-4 text-4xl font-bold text-left text-white font-railway">Learn. Build. <b className="text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-500 to-purple-700 bg-clip-text">Share.</b></h1>
            
                <p className="mb-6 text-left text-gray-500">A collection of my personal notes, interview preparation material, and engineering learnings gathered thoughout my software development journey at Amazon and beyond</p>
            </div>
            <motion.img initial={{ opacity: 0, scale: 1.2 }} animate={{opacity: 1, scale:1}} className="w-[20rem]" src={learnPdfImg} alt="" />
        </section>
        
        </>)
}