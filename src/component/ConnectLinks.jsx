import { motion } from "motion/react";
import githubImg from "../data/images/GitHubPng.png";
import instaImg from "../data/images/InstagramPng.png";
import linkedInImg from "../data/images/LinkedIn.png";
import mailImg from "../data/images/MailPng.png";


export default function ConnectLinks(){

    return(<>
        <section className="w-[15rem] mt-8 text-gray-500">
            <h1 className="mb-2 text-left">Connect with me</h1>
            <div className="flex gap-4">
                <motion.a href="https://www.linkedin.com/in/sudhanshu-koli-sk2001" whileHover={{ scale: 1.1 }} target="_blank" rel="noreferrer">
                    <img src={linkedInImg} alt="LinkedIn" />
                </motion.a>
                <motion.a href="www.linkedin.com/in/sudhanshu-koli-sk2001" whileHover={{ scale: 1.1 }} target="_blank">
                    <img src={instaImg} alt="Instagram" />
                </motion.a>
                <motion.a href="www.linkedin.com/in/sudhanshu-koli-sk2001" whileHover={{ scale: 1.1 }} target="_blank">
                    <img src={mailImg} alt="Mail" />
                </motion.a>
                <motion.a href="https://github.com/sudhanshukoli" whileHover={{ scale: 1.1 }} className="w-[1400px]" target="_blank" rel="noreferrer">
                    <img src={githubImg} alt="GitHub" />
                </motion.a>
            </div>
        </section>
    </>)


}