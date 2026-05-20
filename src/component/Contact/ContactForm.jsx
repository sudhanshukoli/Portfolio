import { faFileText, faPaperPlane, faPenToSquare, faUser } from "@fortawesome/free-regular-svg-icons";
import { faAt, faCircle as faCircleSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactForm({ setMailModal, setFormData, formData }){

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
        <section className="px-10 text-white border border-opacity-50 font-railway py-14 bg-purple-950 bg-opacity-20 border-purple-950 rounded-2xl">
            <div className="text-left">
                <h1 className="mb-4"><FontAwesomeIcon icon={faCircleSolid} className="w-3 h-3 mr-2 text-2xl text-purple-500"/>Send a message</h1>
                <p className="mb-6 text-left text-gray-50">Fill out the form below and i'll get back to you as soon as possible</p>
            </div>    

            <div className="flex flex-col">

                <div className="relative w-full">
                    <label htmlFor="name" className="block mb-2 text-start">Your Name</label>
                    <FontAwesomeIcon icon={faUser} className="absolute h-[8rem] flex items-center text-purple-400 left-4 -top-1"  />
                    <input value={formData.name} onChange={handleChange} type="text" name="name" placeholder="Enter your name"
                            className="float-left pl-12 mb-10 p-4 bg-transparent border rounded-lg w-[35rem] border-purple-950 border-opacity-700" />
                </div>        

                <div className="relative w-full">
                    <label htmlFor="email" className="block mb-2 text-start">Your Email</label>
                    <FontAwesomeIcon icon={faAt} className="absolute h-[8rem] flex items-center text-purple-400 left-4 -top-1"  />
                    <input value={formData.email} onChange={handleChange} type="email" name="email" placeholder="Enter your email" 
                            className="float-left pl-12 mb-10 p-4 bg-transparent border rounded-lg w-[35rem] border-purple-950 border-opacity-700" />        
                </div>

                <div className="relative w-full">
                    <label htmlFor="subject" className="block mb-2 text-start">Subject</label>
                    <FontAwesomeIcon icon={faPenToSquare} className="absolute h-[8rem] flex items-center text-purple-400  left-4 -top-1"  />
                    <input value={formData.subject} onChange={handleChange} type="text" name="subject" placeholder="What's this about?" 
                            className="float-left pl-12 mb-10 p-4 bg-transparent border rounded-lg w-[35rem] border-purple-950 border-opacity-700" />
                </div>

                <div className="relative w-full">
                    <label htmlFor="message" className="block mb-2 text-start">Message</label>
                    <FontAwesomeIcon icon={faFileText} className="absolute h-[8rem] flex items-center text-purple-400 -translate-y-1/2 left-4 top-1/4"  />
                    <textarea value={formData.message} onChange={handleChange} rows="5" type="text" name="message" placeholder="Your message here" 
                            className="float-left pl-12 mb-10 p-4 bg-transparent border rounded-lg w-[35rem] border-purple-950 border-opacity-700" />
                </div>
                
                <button onClick={handleSubmit} className="p-3 font-semibold text-white w-[35rem] bg-purple-900 border border-purple-700 from-purple-950 to-purple-500 hover:bg-gradient-to-tr font-railway rounded-xl">
                    Send Message <FontAwesomeIcon icon={faPaperPlane} />
                </button>
                                
            </div>
        </section>
    </>)

}