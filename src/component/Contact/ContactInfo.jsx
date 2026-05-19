import { faAt, faCalendar, faCircle as faCircleSolid, faLocation, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mapImg from "../../data/images/MapPng.png";

export default function ContactInfo(){

    const sectionCss = "w-[35rem] h-full text-white border flex flex-col gap-2 border-opacity-50 font-railway bg-purple-950 bg-opacity-20 border-purple-950 rounded-2xl"
    
    return(<>
        <div className="flex flex-col">
            <section className={`${sectionCss} h-[30rem] p-10 py-14`}>
                <div className="text-left">
                    <h1 className="mb-4"><FontAwesomeIcon icon={faCircleSolid} className="w-3 h-3 mr-2 text-2xl text-purple-500"/>Contact information</h1>
                </div>

                <div className="flex flex-row ">
                    <FontAwesomeIcon icon={faMobile} className="self-center mr-2 text-2xl text-purple-400 rounded-full"/>
                    <div className="text-left">
                        <h1 >Phone </h1>
                        <h2 className="text-sm font-castoroRegular">+91 86683 27650</h2>
                    </div>
                </div>

                <div className="flex flex-row ">
                    <FontAwesomeIcon icon={faAt} className="self-center mr-2 text-2xl text-purple-400 rounded-full"/>
                    <div className="text-left ">
                        <h1>Email </h1>
                        <h2 className="text-sm">kolisudhanshu@gmail.com</h2>
                    </div>
                </div>

                <div className="flex flex-row ">
                    <FontAwesomeIcon icon={faLocation} className="self-center mr-2 text-2xl text-purple-400 rounded-full"/>
                    <div className="text-left">
                        <h1>Location </h1>
                        <h2 className="text-sm">Kolhapur</h2>
                    </div>
                </div>

                <div className="flex flex-row ">
                    <FontAwesomeIcon icon={faCalendar} className="self-center mr-2 text-2xl text-purple-400 rounded-full"/>
                    <div className="text-left">
                        <h1>Availability </h1>
                        <h2 className="text-sm">Open to work</h2>
                    </div>
                </div>            
            </section>

            <section className={`${sectionCss} p-0 mt-8`}>
                <div className="relative w-full h-full p-4 text-left bg-center bg-cover rounded-2xl" style={{backgroundImage: `url(${mapImg})` }}>
                    <div className="absolute bottom-0 left-0 w-full px-8 py-4 bg-black bg-opacity-70">
                        <h1>No matter where you are, <br /> we can build something great together.</h1>
                        <h1 className="font-bold text-purple-400">Lets Connect and create impact!</h1>
                    </div>
                </div>
            </section>
        </div>    
    </>)
}