import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LetsConnectButton(){

    const openWhatsApp = () => {

        const text = "Hi, I visited your portfolio website and would like to connect.";

    const whatsappUrl =
    `https://wa.me/918668327650?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");
    };

    return(<>
        <button onClick={openWhatsApp} className="float-right py-3 font-semibold text-white w-full md:w-[15rem] bg-transparent border border-purple-700 from-purple-950 to-purple-500 hover:bg-gradient-to-tr font-railway rounded-xl">Let's connect <FontAwesomeIcon className="md:pl-4 md:text-2xl" icon={faArrowRight} /></button>
    </>)

}