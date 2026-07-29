import mapImg from "../../data/images/MapPng.png";
import LetsConnectButton from "../buttons/LetsConnectButton";

export default function LetsConnectCard(){

    const sectionCss = `hidden md:block h-full text-white border flex flex-col gap-2 font-railway bg-purple-950 bg-opacity-20 border-purple-700 rounded-2xl`

    return(<>
        <section className={`${sectionCss} p-0 mt-8`}>
                <div className="relative w-full h-full p-4 text-left bg-center bg-cover rounded-2xl" style={{backgroundImage: `url(${mapImg})` }}>
                    <div className="absolute bottom-0 left-0 w-full px-8 py-4 bg-black border-b border-purple-700 rounded-2xl bg-opacity-70">
                        
                        <LetsConnectButton />
                          
                        <h1>No matter where you are, <br /> we can build something great together.</h1>
                        <h1 className="font-bold text-purple-400">Lets Connect and create impact!</h1>
                        
                    </div>
                </div>
            </section>  
    </>)
}