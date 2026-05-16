export default function Learn(){

    const liClasses = "cursor-pointer hover:border-t-4 transition-transform duration-300  hover:-translate-y-2 w-[12rem] h-[20rem] content-center bg-gray-500 px-10 rounded-xl border-white border bg-opacity-40";

    return(<>
    
        <div className="flex items-center justify-center w-screen h-screen overflow-hidden text-white shadow-xl">
            <ul className="flex items-center justify-center gap-12">
                <li className={liClasses} onClick={() => window.open("/pdfs/database.pdf")}>Learn Database</li>
                <li className={liClasses} onClick={() => window.open("/pdfs/interviewspringboot.pdf")}>Spring Boot Interview Prep</li>
                <li className={liClasses} onClick={() => window.open("/pdfs/javainterview.pdf")}>JAVA Interview Prep</li>
                <li className={liClasses} onClick={() => window.open("/pdfs/springboot.pdf")}>Learn Spring Boot</li>
                <li className={liClasses} onClick={() => window.open("/pdfs/studymaterial.pdf")}>Study Material</li>
            </ul>
        </div>

    </>)
}