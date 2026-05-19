import ContactDesc from "./ContactDesc";
import ContactForm from "./ContactForm";

export default function Contact(){

    return(<>
        <section className="flex flex-col items-center justify-center w-screen h-full pb-20 overflow-hidden shadow-xl gap-36">
            <ContactDesc />
            <div className="flex items-center justify-around w-screen h-full ">
                <ContactForm />
            </div>    
        </section>
    </>)

}