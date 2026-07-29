import { faFileText, faPaperPlane, faPenToSquare, faUser } from "@fortawesome/free-regular-svg-icons";
import { faAt, faCircle as faCircleSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactForm({ setMailModal, setFormData, formData }){

    const labelCss = 'block mb-2 text-start text-xs md:text-xl'
    const inputIconCss = 'absolute md:h-[8rem] h-[1rem] flex items-center text-purple-400 md:left-4 left-1 md:top-0 bottom-4 md:bottom-0'
    const inputFieldCss = 'float-left md:pl-12 pl-7 text-xs md:text-lg md:mb-10 mb-2 md:p-4 p-2 bg-transparent border rounded-lg md:w-[35rem] w-[18rem] border-purple-950 border-opacity-700'

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("THIS IS FORM DATA NAME" + formData.name);
        console.log("THIS IS FORM DATA MESSAGE" + formData.message);

            if (
                !formData.name ||
                !formData.email ||
                !formData.subject ||
                !formData.message
            ) {
            alert("Fill all fields");
            return;
        }
            setMailModal(true);
    };
    

    return(<>
        <section className="p-4 mt-4 text-white border border-purple-700 md:mt-0 md:px-16 font-railway md:py-14 bg-purple-950 bg-opacity-20 rounded-2xl">
            <div className="text-left">
                <h1 className="mb-2 text-sm md:mb-4 md:text-xl"><FontAwesomeIcon icon={faCircleSolid} className="w-3 h-3 mr-2 text-purple-500"/>Send a message</h1>
                <p className="mb-6 ml-6 text-xs text-left text-gray-400 md:text-sm">Fill out the form below and i'll get back to you as soon as possible</p>
            </div>    

            <div className="flex flex-col">

                <div className="relative w-full">
                    <label htmlFor="name" className={labelCss}>Your Name</label>
                    <FontAwesomeIcon icon={faUser} className={inputIconCss}  />
                    <input value={formData.name} onChange={handleChange} type="text" name="name" placeholder="Enter your name"
                            className={inputFieldCss} />
                </div>        

                <div className="relative w-full">
                    <label htmlFor="email" className={labelCss}>Your Email</label>
                    <FontAwesomeIcon icon={faAt} className={inputIconCss}  />
                    <input value={formData.email} onChange={handleChange} type="email" name="email" placeholder="Enter your email" 
                            className={inputFieldCss} />        
                </div>

                <div className="relative w-full">
                    <label htmlFor="subject" className={labelCss}>Subject</label>
                    <FontAwesomeIcon icon={faPenToSquare} className={inputIconCss}  />
                    <input value={formData.subject} onChange={handleChange} type="text" name="subject" placeholder="What's this about?" 
                            className={inputFieldCss} />
                </div>

                <div className="relative w-full">
                    <label htmlFor="message" className={labelCss}>Message</label>
                    <FontAwesomeIcon icon={faFileText} className="absolute md:h-[8rem] h-[1rem] flex items-center text-purple-400 md:-translate-y-1/2 md:left-4 left-1 top-8 md:top-1/4"  />
                    <textarea value={formData.message} onChange={handleChange} rows="5" type="text" name="message" placeholder="Your message here" 
                            className={inputFieldCss} />
                </div>
                
                <button onClick={handleSubmit} className="md:p-3 p-2 md:text-lg text-sm font-semibold text-white md:w-[35rem] bg-purple-900 border border-purple-700 from-purple-950 to-purple-500 hover:bg-gradient-to-tr font-railway rounded-md md:rounded-xl">
                    Send Message <FontAwesomeIcon icon={faPaperPlane} />
                </button>
                                
            </div>
        </section>
    </>)

}