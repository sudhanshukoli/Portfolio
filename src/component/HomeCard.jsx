import { faCircle as faCircleRegular } from "@fortawesome/free-regular-svg-icons";
import { faCircle as faCircleSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import useEmblaCarousel from 'embla-carousel-react';
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import homeCardsData from "../data/homeCardsData";

export default function HomeCard(){

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [descVisible, setDescVisible] = useState(null);

    const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [
        WheelGesturesPlugin({ forceWheelAxis: 'y' },{ target: document.querySelector('.embla__viewport') }),
        ClassNames(), 
        Autoplay({
        delay: 1500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      })
    ]
    );

    // Update selected center card
    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        onSelect();

        emblaApi.on("select", onSelect);

        return () => {
        emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);



    // const scrollPrev = () => emblaApi && emblaApi.scrollPrev();

    // const scrollNext = () => emblaApi && emblaApi.scrollNext();

    const scrollTo = (index) => emblaApi && emblaApi.scrollTo(index);

    return(<>
    <div className="w-full overflow-hidden shadow-xl">

        <div className="overflow-hidden w-full max-w-[32rem] h-[32rem] sm:h-[38rem] md:h-[45rem] mx-auto" ref={emblaRef}>

            <div className="flex">           
                {homeCardsData.map((data, index)=>(
                    <div key={data.id} className="flex-[0_0_85%] sm:flex-[0_0_70%] md:flex-[0_0_30rem] px-2 py-6 sm:py-8 " >
                        <motion.div initial={{ opacity: 0, scale: 1.2 }} onClick={() => window.location.href = data.link}
                            animate={{ opacity: selectedIndex === index ? 1 : 0.7, scale: selectedIndex === index ? 1 : 0.9, }}
                            whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }} onHoverStart={()=>setDescVisible(index)} onHoverEnd={() => setDescVisible(null)} 
                             className="relative cursor-pointer w-full h-[24rem] sm:h-[30rem] md:h-[35rem] bg-contain bg-no-repeat bg-center rounded-xl overflow-hidden bg-black" style={{backgroundImage: `url(${data.image})`}}>
                                
                                {/* <h2 className="p-5 m-auto text-2xl font-bold text-white font-castoroRegular bg-slate-700/60 text-shadow-lg">{data.title}</h2> */}
                                <AnimatePresence >
                                    {descVisible === index && <motion.h2 transition={{ duration: 0.2 }} initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: 100}} className="absolute inset-x-0 bottom-0 p-5 m-auto font-gruppoRegular text-1.5xl text-white bg-slate-700/50" >{data.desc}</motion.h2>}
                                </AnimatePresence>

                        </motion.div>
                    </div>
                ))}
            </div>
                
            <div className="flex justify-between">
                {/* <div className="flex items-center w-full px-2 mb-6 text-white">

                    <button onClick={scrollPrev}><FontAwesomeIcon className="text-2xl" icon={faLeftLong} /></button>

                    <div className="mx-2 text-xl">
                    {selectedIndex + 1} / {homeCardsData.length}
                    </div>

                    <button onClick={scrollNext}><FontAwesomeIcon className="text-2xl" icon={faRightLong} /></button>

                </div> */}

                <div className="flex gap-4 px-5 m-auto text-white">
                    {homeCardsData.map((_, index) => (
                        <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`w-2 h-2 rounded-full text-sm text-purple-700 transition-all duration-300`} >{selectedIndex === index ? (<FontAwesomeIcon icon={faCircleSolid}/>)  : (<FontAwesomeIcon icon={faCircleRegular}/>)}</button>
                    ))}
                </div>
            </div>
              
        </div>  
    </div>                

    </>)

}