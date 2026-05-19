import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ConnectLinks from "./ConnectLinks";

export default function HomeInfo(){

    return(<>
        <section className="flex flex-col">
            <h1 className="mb-4 text-4xl font-bold text-left text-white font-railway">Creative Ideas <br /> Into <b className="text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-500 to-purple-700 bg-clip-text">Digital Reality</b></h1>
            
            <p className="mb-6 text-left text-gray-500">Full Stack Developer passionate about building fast, scalable,<br /> and modern web applications.
            Specialized in Spring Boot, React, and <br /> responsive UI design. Turning ideas into real-world digital solutions.</p>

            <button onClick={() => window.open("/pdfs/sudhanshu.pdf")} className="self-end p-3 font-semibold text-white w-[15rem] bg-transparent border border-purple-700 from-purple-950 to-purple-500 hover:bg-gradient-to-tr font-railway rounded-xl">Download Resume <FontAwesomeIcon className="text-2xl" icon={faDownload} /></button>

            <ConnectLinks />
        </section>
    </>)

}