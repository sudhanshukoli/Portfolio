import HomeCard from "./HomeCard"
import HomeInfo from "./HomeInfo"

export default function Home(){

    return(<>
    <section className="flex flex-col items-center justify-center w-full h-full px-10 m-4 sm:px-48 sm:gap-36 md:flex-row">
        <HomeInfo />
        <HomeCard />
    </section>
    </>)
}