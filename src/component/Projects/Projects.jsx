import { ProjectCardData, ProjectsHeaderData } from "../../data/ProjectsPageData";
import CommonHeader from "../Common/CommonHeader";
import ProjectCard from "./ProjectCard";
import ProjectConnectBtn from "./ProjectConnectBtn";


export default function Projects(){
    return(<>
        <section className="flex flex-col items-center justify-center w-full h-full gap-4 px-8 pt-8 pb-8 overflow-hidden shadow-xl md:pb-20 md:pt-20 md:px-28">
            <CommonHeader headerData={ProjectsHeaderData}/>

            <div className="flex flex-row justify-start w-full gap-3 md:gap-6 md:p-10">
                {ProjectCardData.map((cardData, index) => (
                    <ProjectCard key={index} cardData={cardData}/>
                ))}
            </div>

            <div className="w-full md:px-10">
                <ProjectConnectBtn />
            </div>
        </section>
    </>)
}