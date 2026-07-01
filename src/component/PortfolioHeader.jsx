import { faArrowUpRightFromSquare, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { useState } from "react";
import { NavLink } from "react-router";
export default function PortfolioHeader(){
    const btnCss = "sm:py-2 sm:p-6 text-xl text-white border border-purple-700 font-railway rounded-xl"


    const [menuOpen, setMenuOpen] = useState(false);

    const onActiveNavCss = "bg-gradient-to-r from-violet-400 underline underline-offset-4 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent";

    return(<>
    
    <div className="sticky top-0 z-20 w-full px-3 pt-4">

        <motion.div initial={{y: -100, opacity: 0}} transition={{duration: 1, ease: "easeInOut"}} animate={{y: 0, opacity: 1}}
                    className="relative border border-purple-700 rounded-2xl bg-black/40 shadow-[0_0_60px_rgba(147,51,234,0.35)] px-5 py-3">
                            
            <div className="flex items-center justify-between">         
                <div className="flex items-center">        
                    {/* <div initial={{opacity: 0}} transition={{duration: 1, ease: "easeInOut"}} animate={{ opacity: 1}} className="w-12 h-12 bg-center bg-cover sm:h-16 sm:w-16" 
                            style={{ backgroundImage: `url(${cvPic})`,
                                    WebkitMaskImage: "radial-gradient(ellipse 100% 100% at left, black 60%, transparent 100%)" }}>
                    </div> */}
                    <h1 className="text-xl font-semibold text-transparent sm:text-2xl md:text-3xl font-railway bg-gradient-to-r from-violet-400 via-fuchsia-500 to-purple-700 bg-clip-text">Sudhanshu Koli {'</>'}</h1>
                </div>
                        
                <nav className="flex-wrap items-center justify-center hidden gap-2 text-sm text-white md:flex text-xlflex sm:gap-4 sm:text-lg md:text-xl">
                    <NavLink whileHover={{scale: 1.1}} to="/" className={({isActive})=>`font-railway px-2 sm:px-4  ${isActive ? onActiveNavCss : ""} `}>Home</NavLink>
                    <NavLink to="/projects" className={({isActive})=>`font-railway px-2 sm:px-4  ${isActive ? onActiveNavCss : ""} `}>Projects</NavLink>
                    <NavLink to="/learn" className={({isActive})=>`font-railway px-2 sm:px-4  ${isActive ? onActiveNavCss : ""} `}>Learn</NavLink>
                    <NavLink to="/about" className={({isActive})=>`font-railway px-2 sm:px-4  ${isActive ? onActiveNavCss : ""} `}>About</NavLink>
                    <NavLink to="/contact" className={({isActive})=>`font-railway px-2 sm:px-4  ${isActive ? onActiveNavCss : ""} `}>Contact</NavLink>
                    
                    <button className={`${btnCss} from-purple-950 to-purple-500 bg-gradient-to-tr hover:from-transparent hover:to-transparent `}
                        onClick={()=> window.open("/pdfs/sudhanshu.pdf")} >Resume<FontAwesomeIcon className="pl-2" icon={faArrowUpRightFromSquare} /></button>
                </nav>

                {/* Mobile Hamburger */}
                <button className="text-2xl text-white md:hidden" onClick={() => setMenuOpen(!menuOpen)} >
                    <FontAwesomeIcon  icon={menuOpen ? faXmark : faBars}  />
                </button>
            </div>
            
            {/* Mobile Dropdown */}
            <motion.div initial={false}  animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0, }} className="overflow-hidden md:hidden" >

                <nav className="flex flex-col gap-4 mt-5 text-lg text-center text-white font-railway" >

                    <NavLink className={({isActive})=>`font-railway px-2 sm:px-4  ${isActive ? onActiveNavCss : ""} `} to="/">Home</NavLink>

                    <NavLink className={({isActive})=>`font-railway px-2 sm:px-4  ${isActive ? onActiveNavCss : ""} `} to="/projects">Projects</NavLink>

                    <NavLink className={({isActive})=>`font-railway px-2 sm:px-4  ${isActive ? onActiveNavCss : ""} `} to="/learn">Learn</NavLink>

                    <NavLink className={({isActive})=>`font-railway px-2 sm:px-4  ${isActive ? onActiveNavCss : ""} `} to="/about">About</NavLink>

                    <NavLink className={({isActive})=>`font-railway px-2 sm:px-4  ${isActive ? onActiveNavCss : ""} `} to="/contact">Contact</NavLink>

                    <button className={`${btnCss} mx-20 from-purple-950 to-purple-500 bg-gradient-to-tr hover:from-transparent hover:to-transparent `}
                        onClick={()=> window.open("/pdfs/sudhanshu.pdf")} >Resume<FontAwesomeIcon className="pl-2" icon={faArrowUpRightFromSquare} /></button>
                    
                </nav>

            </motion.div>

        </motion.div>

        

    </div>

    </>)
}