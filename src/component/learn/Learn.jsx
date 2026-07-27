import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import learnData, { LearnHeaderData } from "../../data/LearnPageData";
import CommonHeader from "../Common/CommonHeader";
import LearnDataCard from "./LearnDataCard";

export default function Learn(){
        
    const [pdfSearch, setPdfSearch] = useState("");

    const filteredData = learnData.filter((theData) => theData.title.toLocaleLowerCase().includes(pdfSearch.toLowerCase()));
    
    return(<>
        <section className="flex flex-col items-center justify-center w-full h-full gap-4 p-8 overflow-hidden shadow-xl md:gap-10 md:pb-10 md:px-28">
            <CommonHeader headerData={LearnHeaderData}/>
            
            <div className="flex flex-col w-full gap-4 p-3 border border-gray-400 md:gap-8 md:p-8 bg-black/50">            
                        
                <div className="flex gap-5">
                    <FontAwesomeIcon className="absolute flex items-center p-2 text-2xl text-purple-600/60" icon={faMagnifyingGlass} />
                    <input type="search" value={pdfSearch} onChange={(e)=> setPdfSearch(e.target.value)} name="search"
                        placeholder="Search data by Title / Skill" 
                        className="p-2 px-4 pl-10 text-white bg-transparent border-2 rounded-lg outline-none border-purple-600/60 w-[30rem]"/>
                </div>
                
                <div className="grid grid-cols-2 gap-5 md:grid-cols-3 gap-x-15">
                    {filteredData.map((data, index) => (
                        <div key={index}>
                            <LearnDataCard learnData={data} />
                        </div> 
                    ))}
                </div>
            </div>
                
        </section>
    </>)
}