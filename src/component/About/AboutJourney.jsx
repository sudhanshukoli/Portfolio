import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { faFaceSmile, faHandshake, faHourglass, faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faCircle as faCircleSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AboutJourney(){

    const sectionCss = "w-full h-full text-white border flex flex-col gap-2 font-railway bg-purple-950 bg-opacity-20 border-purple-700 rounded-2xl"
    const valueIconCss = 'self-center text-sm py-1 md:text-2xl text-purple-500'
    const valueTitleCss = 'md:text-xs text-[10px] font-bold text-center'
    const valueCss = 'font-normal text-center text-gray-500 text-[8px] md:text-xs'

    return(<>
        <div className="flex flex-col">
            <section className={`${sectionCss} p-5 md:p-10 md:py-14`}>
                <div className="text-left">
                    <h1 className="mb-4"><FontAwesomeIcon icon={faCircleSolid} className="w-3 h-3 mr-2 text-2xl text-purple-500"/>My Journey</h1>
                </div>

                <div>
                    <div className="flex items-start justify-start">
                        <FontAwesomeIcon className="p-1 mr-2 text-2xl text-purple-300 border-2 border-purple-300 rounded-full md:p-0 md:py-1 md:text-4xl bg-opacity-20 bg-purple-950 " icon={faAmazon} /> <h1 className="self-center font-bold text-left">Amazon - 2023<p className="font-normal text-gray-500">Automation Specialist (Java developer)</p></h1>  
                    </div>
                </div>
            </section>

            <section className={`${sectionCss}  mt-4 md:mt-8`}>
                <div className="px-5 pt-5 text-left md:pt-10 md:px-10">
                    <h1 className="mb-4"><FontAwesomeIcon icon={faCircleSolid} className="w-3 h-3 mr-2 text-2xl text-purple-500"/>My Values</h1>
                </div>

                <div className="flex md:gap-1">
                    <div className="flex flex-col">
                        <FontAwesomeIcon className={valueIconCss} icon={faLightbulb} /> <h1 className={valueTitleCss}>Problem Solving<p className={valueCss}>Resolve complex production issues with logical and efficient solutions.</p></h1>  
                    </div>

                    <div className="flex flex-col items-start justify-start">
                        <FontAwesomeIcon className={valueIconCss} icon={faHandshake} /> <h1 className={valueTitleCss}>Communication<p className={valueCss}>Bridge communication between technical and non-technical stakeholders.</p></h1>  
                    </div>

                    <div className="flex flex-col items-start justify-start">
                        <FontAwesomeIcon className={valueIconCss} icon={faHourglass} /> <h1 className={valueTitleCss}>Time Management<p className={valueCss}>Deliver high-quality work within sprint timelines.</p></h1>  
                    </div>

                    <div className="flex flex-col items-start justify-start">
                        <FontAwesomeIcon className={valueIconCss} icon={faFaceSmile} /> <h1 className={valueTitleCss}>Ownership<p className={valueCss}>Take end-to-end responsibility for features and applications.</p></h1>  
                    </div>
                </div>
            </section>
        </div>  
    </>)
}