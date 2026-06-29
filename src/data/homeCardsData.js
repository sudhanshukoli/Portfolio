import learnPng from "./images/learnPng.png";
import motivationPng from "./images/motivationPng.png";
import projectsPng from "./images/projectsPng.png";
import resumePng from "./images/resumePng.png";

const homeCardsData = [
  {
    id: 1,
    title: "My Resume",
    desc: "Check my latest Resume",
    image: resumePng,
    link: "/pdfs/sudhanshu.pdf"
  },

  {
    id: 2,
    title: "Projects",
    desc: "Click here to check my projects",
    image: projectsPng,
    link: "/projects"
  },
  {
    id: 3,
    title: "Motivation",
    desc: "Click here to get motivated",
    image: motivationPng,
    link: "/motivation"
  },
  {
    id: 4,
    title: "Learn",
    desc: "Click here to Learn new things",
   image: learnPng  ,
   link: "/learn"
  },
  
];

export default homeCardsData;