import { faBrain, faUserTie } from "@fortawesome/free-solid-svg-icons";
import bgInterviewProProject from "../data/images/bgInterviewProProject.png";
import bgPersonalPortfolioProject from "../data/images/bgPersonalPortfolioProject.png";
import bgProjects from "../data/images/bgProjects.png";




export const ProjectsHeaderData = {

        headerLine: "Projects That",
        highlightHeader: "Solve Problems",
        subHeader: "Let's build something amazing together",
        desc: "A collection of projects where i turned ideas into real-world solutions using modern technologies",
        headerImg: bgProjects
    }

export const ProjectCardData = [
    {
        image: bgInterviewProProject,
        icon: faBrain,
        title: "AI-InterviewPro",
        desc: "Built a full-stack AI interview preparation platform where users can practice adaptive mock interviews across multiple tech stacks.",
        sourceLink: "https://github.com/sudhanshukoli/InterviewPro",
        demoLink: "https://interview-pro-by-sudhanshu.vercel.app"

    },
    {
        image: bgPersonalPortfolioProject,
        icon: faUserTie,
        title: "Personal Portfolio",
        desc: "A React-based portfolio website built to present my projects, technical skills, resume, and professional experience in one place.",
        sourceLink: "https://github.com/sudhanshukoli/Portfolio",
        demoLink: "https://sudhanshukoli-portfolio.vercel.app"

    }
]    