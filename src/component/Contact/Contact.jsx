import { useState } from "react";
import { ContactHeaderData } from "../../data/ContactPageData";
import CommonHeader from "../Common/CommonHeader";
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
        <section className="flex flex-col items-center justify-center w-full h-full px-8 pt-10 shadow-xl md:px-28 md:py-20 md:gap-10">
            <CommonHeader headerData={ContactHeaderData} />
            <div className="flex flex-col justify-center w-full h-full gap-4 md:gap-10 md:flex-row ">
                <ContactForm setMailModal={setMailModal} formData={formData} setFormData={setFormData} />
                <ContactInfo />
                {mailModal && (<GmailModal setMailModal={setMailModal} formData={formData} setFormData={setFormData} />) }
            </div>    
        </section>
    </>)

}