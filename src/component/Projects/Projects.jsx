import { ProjectCardData, ProjectsHeaderData } from "../../data/ProjectsPageData";
import CommonHeader from "../Common/CommonHeader";
import ProjectCard from "./ProjectCard";
import ProjectConnectBtn from "./ProjectConnectBtn";


export default function Projects(){
    return(<>
        <section className="flex flex-col items-center justify-center w-full h-full gap-10 pt-20 pb-20 overflow-hidden shadow-xl px-28">
            <CommonHeader headerData={ProjectsHeaderData}/>

            <div className="flex flex-row justify-start w-full gap-6 p-10">
                {ProjectCardData.map((cardData, index) => (
                    <ProjectCard key={index} cardData={cardData}/>
                ))}
            </div>

            <div className="w-full px-10">
                <ProjectConnectBtn />
            </div>
        </section>
    </>)
}