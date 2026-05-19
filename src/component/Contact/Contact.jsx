import ContactDesc from "./ContactDesc";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact(){

    return(<>
        <section className="flex flex-col items-center justify-center w-screen h-full gap-10 pb-20 overflow-hidden shadow-xl">
            <ContactDesc />
            <div className="flex justify-center w-screen h-full gap-8 ">
                <ContactForm />
                <ContactInfo />
            </div>    
        </section>
    </>)

}