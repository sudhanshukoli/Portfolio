import HomeCard from "./HomeCard"
import HomeInfo from "./HomeInfo"

export default function Home(){

    return(<>
    <section className="flex items-center justify-center w-screen h-full overflow-hidden shadow-xl gap-36">
        <HomeInfo />
        <HomeCard />
    </section>
    </>)
}