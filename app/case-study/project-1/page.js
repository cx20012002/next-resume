import Header from "@/components/home/Header";
import Image from "next/image";
import {images} from "@/utils/images";
import ParallaxSection from "@/components/ParallaxSection";

function Project1() {
    return (
        <main className={"w-full items-center flex flex-col bg-neutral-50 font-inter overflow-hidden relative"}>
            <Header/>
            <div className={"max-w-[1600px] w-full flex flex-col xl:p-20 xl:pb-36 p-10 xl:gap-40 gap-20 start-bg"}>
                <ParallaxSection className={"w-full flex flex-col relative xl:gap-40 gap-10 opacity-0"}>
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
                        <div className={"flex xl:flex-row flex-col xl:gap-20 gap-5"}>
                            <div className={"flex flex-col xl:w-8/12 w-full gap-5"}>
                                <h1 className={"xl:text-[96px] md:text-[72px] text-[40px] font-[700]"}>Project 1</h1>
                                <p className={"xl:text-[32px] md:text-[24px] text-[20px] font-[400]"}>Some details about
                                    the project should be here and it shouldn’t be super long.</p>
                            </div>
                            <div className={"flex flex-col justify-end xl:w-4/12 w-full"}>
                                <div className={"flex w-full items-center gap-5 "}>
                                    <div className={"w-full h-[2px] bg-black order-last xl:order-first"}/>
                                    <p className={"whitespace-nowrap xl:text-[24px] text-[20px] font-[500]"}>Design Lead
                                        / 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"rounded-3xl overflow-hidden z-20"}>
                        <Image src={images.project1Main} placeholder={"blur"} alt={"main"}
                               className={"xl:h-auto h-[480px] object-cover object-center"}/>
                    </div>
                </ParallaxSection>

                <div className={"w-full flex flex-col xl:gap-40 gap-20"}>
                    <ParallaxSection className={"flex md:flex-row w-full flex-col md:gap-10 gap-5"}>
                        <div className={"md:w-1/2 w-full"}>
                            <h1 className={"xl:text-[96px] md:text-[72px] text-[40px] font-[700] leading-none"}>
                                The Goal
                            </h1>
                        </div>
                        <div className={"md:w-1/2 w-full"}>
                            <p className={"xl:text-[32px] md:text-[24px] text-[20px] font-[400]"}>The goal of this
                                project was to design and develop a web-based task management tool for small to
                                medium-sized businesses.
                            </p>
                        </div>
                    </ParallaxSection>
                    <ParallaxSection className={"flex md:flex-row w-full flex-col md:gap-10 gap-5"}>
                        <div className={"md:w-1/2 w-full rounded-3xl overflow-hidden"}>
                            <Image src={images.project1_2} placeholder={"blur"} alt={"main"}
                                   className={"xl:h-[640px] h-[480px] object-cover object-center"}/>
                        </div>
                        <div className={"md:w-1/2 w-full rounded-3xl overflow-hidden"}>
                            <Image src={images.project1_3} placeholder={"blur"} alt={"main"}
                                   className={"xl:h-[640px] h-[480px] object-cover object-center"}/>
                        </div>
                    </ParallaxSection>
                    <ParallaxSection className={"flex flex-col md:gap-20 gap-10"}>
                        <div className={"w-full flex-col"}>
                            <h1 className={"xl:text-[96px] md:text-[72px] text-[40px] font-[700] leading-none"}>
                                The Process
                            </h1>
                        </div>
                        <div className={"w-full flex flex-col xl:gap-20 gap-10"}>
                            <div className={"flex xl:flex-row flex-col items-start gap-5"}>
                                <div
                                    className={"xl:w-1/2 w-full flex items-center justify-start md:gap-10 gap-5 leading-none"}>
                                    <p className={"xl:text-[96px] md:text-[72px] text-[40px] text-neutral-200 font-black"}>01</p>
                                    <h2 className={"xl:text-[48px] md:text-[44px] text-[32px] font-bold"}>Research</h2>
                                </div>
                                <div className={"xl:w-1/2 w-full"}>
                                    <p className={"xl:text-[32px] md:text-[24px] text-[20px] font-[400]"}>To understand
                                        the needs and pain points of our target users, I conducted user interviews and
                                        surveys with small business owners and project managers.
                                    </p>
                                </div>
                            </div>
                            <div className={"w-full h-[1px] bg-neutral-300"}/>
                            <div className={"flex xl:flex-row flex-col items-start gap-5"}>
                                <div
                                    className={"xl:w-1/2 w-full flex items-center justify-start md:gap-10 gap-5 leading-none"}>
                                    <p className={"xl:text-[96px] md:text-[72px] text-[40px] text-neutral-200 font-black"}>02</p>
                                    <h2 className={"xl:text-[48px] md:text-[44px] text-[32px] font-bold"}>Visual
                                        Design</h2>
                                </div>
                                <div className={"xl:w-1/2 w-full"}>
                                    <p className={"xl:text-[32px] md:text-[24px] text-[20px] font-[400]"}>Based on our
                                        research findings, I created wireframes and prototypes of the tool's core
                                        features, including project and task management, user roles and permissions,
                                        and real-time collaboration.
                                    </p>
                                </div>
                            </div>
                            <div className={"w-full h-[1px] bg-neutral-300"}/>
                            <div className={"flex xl:flex-row flex-col items-start gap-5"}>
                                <div
                                    className={"xl:w-1/2 w-full flex items-center justify-start md:gap-10 gap-5 leading-none"}>
                                    <p className={"xl:text-[96px] md:text-[72px] text-[40px] text-neutral-200 font-black"}>03</p>
                                    <h2 className={"xl:text-[48px] md:text-[44px] text-[32px] font-bold"}>Development</h2>
                                </div>
                                <div className={"xl:w-1/2 w-full"}>
                                    <p className={"xl:text-[32px] md:text-[24px] text-[20px] font-[400]"}>I worked
                                        closely with a development team to build the tool, ensuring that the design was
                                        implemented correctly and that the tool was fully functional and scalable.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ParallaxSection>
                    <ParallaxSection className={"rounded-3xl overflow-hidden z-20"}>
                        <Image src={images.project1Main} placeholder={"blur"} alt={"main"}
                               className={"xl:h-auto h-[480px] object-cover object-center"}/>
                    </ParallaxSection>
                </div>
            </div>
        </main>
    )
}

export default Project1;
