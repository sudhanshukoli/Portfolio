import { motion } from "motion/react"

export default function CommonHeader({headerData}){
    return(<>
        <section className="flex items-center justify-center md:gap-52 ">
            <div className="w-full">
                <h1 className="mb-2 text-2xl font-bold text-left text-white md:mb-4 md:text-5xl font-railway">{headerData.headerLine} <br /> 
                    <b className="text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-500 to-purple-700 bg-clip-text">{headerData.highlightHeader}</b>
                </h1>
                <h1 className="pl-2 md:mb-6 text-sm md:text-xl text-left text-white border-l-4 border-purple-500 md:w-[28rem] font-railway">{headerData.subHeader}</h1>
                <p className="my-6 text-left text-gray-200">{headerData.desc}</p>
            </div>
            <motion.img initial={{ opacity: 0, scale: 1.2 }} animate={{opacity: 1, scale:1}} className="w-[20rem] hidden md:block" src={headerData.headerImg} alt="Motivation" />
        </section>
    </>)
}