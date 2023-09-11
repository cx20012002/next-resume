import Header from "@/components/home/Header";
import Image from "next/image";
import {images} from "@/utils/images";
import ParallaxSection from "@/components/ParallaxSection";

function About() {
    return (
        <main className={"w-full items-center flex flex-col bg-neutral-50 font-inter overflow-hidden relative"}>
            <Header/>
            <div className={"max-w-[1600px] w-full flex flex-col xl:p-20 xl:pb-40 p-10 xl:gap-20 gap-20 start-bg"}>
                <ParallaxSection className={"w-full flex flex-col relative  gap-20 opacity-0"}>
                    <div className={"w-[600px] h-[600px] absolute top-[22px] left-[181px] rounded-full"}
                         style={{
                             background: "linear-gradient(180deg, rgb(249, 209, 255) 0%, rgb(255, 240, 219) 100%)",
                             filter: "blur(80px)"
                         }}
                    />
                    <div className={"w-[384px] h-[384px] absolute top-[205px] left-[704px]"}
                         style={{
                             background: "linear-gradient(180deg, rgb(249, 209, 255) 0%, rgb(255, 240, 219) 100%)",
                             filter: "blur(80px)"
                         }}
                    />
                    <div className={"flex w-full z-20"}>
                        <div className={"flex w-[75%]"}>
                            <h1 className={"xl:text-[96px] md:text-[72px] text-[40px] font-[700] leading-tight"}>
                                I'm David and I love clean interfaces.
                            </h1>
                        </div>
                    </div>
                    <div className={"rounded-3xl overflow-hidden z-10"}>
                        <Image src={images.project1Main} placeholder={"blur"} alt={"main"}
                               className={"xl:h-auto h-[480px] object-cover object-center"}/>
                    </div>
                </ParallaxSection>

                <div className={"w-full flex flex-col"}>
                    <ParallaxSection className={"flex justify-end"}>
                        <p className={"lg:w-[80%] w-full xl:text-[40px] md:text-[32px] text-[24px] font-[600]"}>I have a passion for
                            creating innovative and intuitive products that solve real-world problems. I have a
                            proven track record of delivering successful products that delight customers and exceed
                            business goals.
                        </p>
                    </ParallaxSection>
                </div>

                <ParallaxSection className={"w-full flex flex-col xl:gap-10 gap-5"}>
                    <h2 className={"xl:text-[32px] sm:text-[24px] text-[20px]"}>Work Experience</h2>
                    <div className={"w-full h-[1px] bg-neutral-300"}/>
                    <div className={"flex sm:flex-row flex-col justify-between sm:items-center items-start"}>
                        <div className={"xl:text-[40px] sm:text-[32px] text-[24px] font-[600]"}>Freelance Designer</div>
                        <div className={"xl:text-[24px] sm:text-[20px] text-[16px] font-[500] text-neutral-500"}>2022 - Present</div>
                    </div>
                    <div className={"w-full h-[1px] bg-neutral-300"}/>
                    <div className={"flex sm:flex-row flex-col justify-between sm:items-center items-start"}>
                        <div className={"xl:text-[40px] sm:text-[32px] text-[24px] font-[600]"}>The Awesome Company</div>
                        <div className={"xl:text-[24px] sm:text-[20px] text-[16px] font-[500] text-neutral-500"}>2021</div>
                    </div>
                    <div className={"w-full h-[1px] bg-neutral-300"}/>
                    <div className={"flex sm:flex-row flex-col justify-between sm:items-center items-start"}>
                        <div className={"xl:text-[40px] sm:text-[32px] text-[24px] font-[600]"}>Company Name</div>
                        <div className={"xl:text-[24px] sm:text-[20px] text-[16px] font-[500] text-neutral-500"}>2022</div>
                    </div>
                </ParallaxSection>
            </div>
        </main>
    )
}

export default About;
