export default function MotivationCard({theData}){
    return(<>
        <section className="w-[13rem] h-[18rem] text-center border border-purple-600/50 rounded-2xl flex flex-col justify-between py-16 px-2 bg-gray-500/10">
            <h1 className="pb-4 font-mono text-xl font-bold text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-500 to-purple-700 bg-clip-text">{theData.title}</h1>
            <p className="font-sans text-gray-400">{theData.desc}</p>
        </section>
    </>)
}