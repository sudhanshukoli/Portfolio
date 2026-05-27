import ConnectLinks from "./ConnectLinks";
import ResumeButton from "./buttons/ResumeButton";

export default function HomeInfo(){

    return(<>
        <section className="flex flex-col w-full px-4 sm:px-6 md:px-0">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-left text-white sm:text-4xl md:text-5xl font-railway">Creative Ideas <br /> Into <b className="text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-500 to-purple-700 bg-clip-text">Digital Reality</b></h1>
            
            <p className="max-w-xl mb-6 text-sm leading-relaxed text-left text-gray-500 sm:text-base md:text-lg" >
                Full Stack Developer passionate about building fast,
                scalable, and modern web applications.

                Specialized in Spring Boot, React, and responsive
                UI design.

                Turning ideas into real-world digital solutions.</p>

            {/* <button onClick={() => window.open("/pdfs/sudhanshu.pdf")} className="self-end p-3 font-semibold text-white w-[15rem] bg-transparent border border-purple-700 from-purple-950 to-purple-500 hover:bg-gradient-to-tr font-railway rounded-xl">Download Resume <FontAwesomeIcon className="text-2xl" icon={faDownload} /></button> */}
            <div className="w-full text-right sm:w-auto">
                <ResumeButton />
            </div>

            <div className="mt-5">
                <ConnectLinks />
            </div>
        </section>
    </>)

}