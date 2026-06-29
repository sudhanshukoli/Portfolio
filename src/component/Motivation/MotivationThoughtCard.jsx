import Mountains from "../../data/images/Mountains.png";

export default function MotivationThoughtCard(){
    return(<>
        <div className="w-[38rem] text-white border border-purple-600/50 rounded-2xl py-8 px-12 bg-cover bg-center bg-black/90" style={{backgroundImage: `url(${Mountains})`}} >
                <h1 className="py-8 text-4xl">Discipline is choosing between what you want now and what you  
                    <b className="text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-500 to-purple-700 bg-clip-text"> want most.</b>
                </h1>
                <p className="text-2xl">I choose growth.</p>
            </div>
    </>)
}