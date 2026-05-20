import { useState } from "react";
import ContactDesc from "./ContactDesc";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import GmailModal from "./GmailModal";

export default function Contact(){


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    
    const [mailModal, setMailModal] = useState(false);

    return(<>
        <section className="flex flex-col items-center justify-center w-screen h-full gap-10 pb-20 overflow-hidden shadow-xl">
            <ContactDesc />
            <div className="flex justify-center w-screen h-full gap-8 ">
                <ContactForm setMailModal={setMailModal} formData={formData} setFormData={setFormData} />
                <ContactInfo />
                {mailModal && (<GmailModal setMailModal={setMailModal} formData={formData} setFormData={setFormData} />) }
            </div>    
        </section>
    </>)

}