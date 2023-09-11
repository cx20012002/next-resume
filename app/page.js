import Header from "@/components/home/Header";
import NameCard from "@/components/home/NameCard";
import AnimatedGradientBg from "@/components/home/AnimatedGradientBg";
import MainContent from "@/components/home/MainContent";

export default function Home() {
    return (
        <main className={"w-full items-center flex flex-col bg-neutral-50 font-inter overflow-hidden relative"}>
            <Header/>
            <NameCard/>
            <AnimatedGradientBg/>
            <MainContent/>
        </main>
    )
}
