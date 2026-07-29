import { faAt, faCalendar, faCircle as faCircleSolid, faLocation, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LetsConnectCard from "./LetsConnectCard";

export default function ContactInfo(){

    const sectionCss = "md:w-[35rem] w-full h-full text-white border flex flex-col gap-2 font-railway bg-purple-950 bg-opacity-20 border-purple-700 rounded-2xl"
    const infoIconCss = 'self-center mr-2 md:text-2xl text-purple-400'
    const contactH1Css = 'text-sm md:text-lg'
    
    return(<>
        <div className="flex-col gap-0 mb-10 md:mb-0 md:flex">
            <section className={`${sectionCss} p-5 md:p-10 md:py-14`}>
                <div className="text-left">
                    <h1 className="text-sm md:mb-4 md:text-xl"><FontAwesomeIcon icon={faCircleSolid} className="w-3 h-3 mr-2 text-purple-500"/>Contact information</h1>
                </div>

                <div className="flex flex-row ">
                    <FontAwesomeIcon icon={faMobile} className={infoIconCss} />
                    <div className="text-left">
                        <h1 className={contactH1Css} >Phone </h1>
                        <h2 className="text-xs md:text-sm font-castoroRegular">+91 86683 27650</h2>
                    </div>
                </div>

                <div className="flex flex-row ">
                    <FontAwesomeIcon icon={faAt} className={infoIconCss}/>
                    <div className="text-left ">
                        <h1 className={contactH1Css}>Email </h1>
                        <h2 className="text-xs md:text-sm">kolisudhanshu@gmail.com</h2>
                    </div>
                </div>

                <div className="flex flex-row ">
                    <FontAwesomeIcon icon={faLocation} className={infoIconCss}/>
                    <div className="text-left">
                        <h1 className={contactH1Css}>Location </h1>
                        <h2 className="text-xs md:text-sm">Kolhapur</h2>
                    </div>
                </div>

                <div className="flex flex-row ">
                    <FontAwesomeIcon icon={faCalendar} className={infoIconCss}/>
                    <div className="text-left">
                        <h1 className={contactH1Css}>Availability </h1>
                        <h2 className="text-xs md:text-sm">Open to work</h2>
                    </div>
                </div>            
            </section>
                
            <LetsConnectCard />
        </div>    
    </>)
}