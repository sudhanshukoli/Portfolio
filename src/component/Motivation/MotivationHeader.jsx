import { motion } from "motion/react"
import bgMotivation from "../../data/images/bgMotivation.png"

export default function MotivationHeader(){
    return(<>
        <section className="flex items-center justify-center gap-52">
            <div className="w-full">
                <h1 className="mb-4 text-5xl font-bold text-left text-white font-railway">What Drives Me <br /> <b className="text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-500 to-purple-700 bg-clip-text">Every Day</b></h1>
                <h1 className="pl-2 mb-6 text-xl text-left text-white border-l-4 border-purple-500 w-[28rem] font-railway">I build not just to code, but to create impact, solve problems and keep growing</h1>
                <p className="mb-6 text-left text-gray-200">Motivation is the fuel behind my consistency. It keeps. me curious, focused and committed to becoming the best version of myself - every single day</p>
            </div>
            <motion.img initial={{ opacity: 0, scale: 1.2 }} animate={{opacity: 1, scale:1}} className="w-[20rem]" src={bgMotivation} alt="Motivation" />
        </section>
    </>)
}