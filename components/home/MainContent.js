import Link from "next/link";
import Image from "next/image";
import {images} from "@/utils/images";
import Slider from "@/components/home/Slider";
import MainContentHoverImage from "@/components/home/MainContentHoverImage";

function MainContent() {
    return (
        <div className={`max-w-[1440px] h-fit flex flex-col gap-[80px] items-center 
            bg-[rgba(255,255,255,0.64)] backdrop-blur-[64px] backdrop-filter:blur rounded-t-[40px] 
            relative py-[120px] px-[80px] z-10`}>
            {/* Introduce Section */}
            <div
                className={"w-full flex flex-col flex-none justify-start items-start flex-nowrap gap-10 overflow-hidden relative"}>
                {/* Title */}
                <div className={"flex justify-start flex-shrink"}>
                    <h1 className={"text-[96px] font-bold tracking-tight"}>Hi, I'm David</h1>
                </div>

                {/* Content */}
                <div className={"flex flex-nowrap gap-[160px] overflow-hidden relative w-full"}>
                    {/* Left Column */}
                    <div className={"flex flex-col flex-1 items-start gap-10"}>
                        <div className={"flex flex-col justify-start flex-shrink-0"}>
                            <p className={"text-[32px] font-[400]"}>A freelance designer with a focus on creating
                                highly polished interfaces. I have over 15 years of experience in doing that.</p>
                        </div>
                        <div
                            className={"flex flex-col max-w-[480px] w-full h-[80px] text-white text-[24px] font-[600]"}>
                            <Link href={"/"}
                                  className={"flex justify-between items-center w-full bg-black py-4 px-10 rounded-full h-[80px] group overflow-hidden relative"}>
                                    <span
                                        className={"group-hover:translate-x-4 group-hover:text-black duration-300 z-20"}>Let's talk</span>
                                <svg width="24" height="24" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg"
                                     className={"group-hover:-translate-x-4 duration-300 z-20"}>
                                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                                          fill="white" className={"group-hover:fill-black"}/>
                                </svg>
                                <div
                                    className={"absolute inset-x-[150] w-[800px] h-[800px] bg-neutral-300 top-[90px] left-0 -translate-x-[150px] z-10 rounded-full group-hover:-top-[120px] duration-300"}></div>
                            </Link>
                        </div>
                    </div>

                    {/* Left Column */}
                    <div className={"flex flex-col overflow-hidden relative gap-5"}>
                        <div className={"flex flex-col justify-start flex-shrink-0"}>
                            <h3 className={"text-[40px] font-[600]"}>Follow me:</h3>
                        </div>
                        <div className={"flex flex-col overflow-hidden text-[24px] font-[500] relative"}>
                            <ul className={"flex flex-col gap-4"}>
                                <li className={"flex flex-col items-start"}>
                                    <Link href={"/"} as={"/"} className={"flex flex-col group gap-1"}>
                                        <div className={"flex gap-2"}>
                                            <Image src={images.star} alt={"star"} width={16} height={16}/>
                                            <p>Instagram</p>
                                        </div>
                                        <div className={"w-0 h-[2px] bg-black group-hover:w-full duration-300"}/>
                                    </Link>
                                </li>
                                <li className={"flex flex-col items-start"}>
                                    <Link href={"/"} as={"/"} className={"flex flex-col group gap-1"}>
                                        <div className={"flex gap-2"}>
                                            <Image src={images.star} alt={"star"} width={16} height={16}/>
                                            <p>Twitter</p>
                                        </div>
                                        <div className={"w-0 h-[2px] bg-black group-hover:w-full duration-300"}/>
                                    </Link>
                                </li>
                                <li className={"flex flex-col items-start"}>
                                    <Link href={"/"} as={"/"} className={"flex flex-col group gap-1"}>
                                        <div className={"flex gap-2"}>
                                            <Image src={images.star} alt={"star"} width={16} height={16}/>
                                            <p>Dribbble</p>
                                        </div>
                                        <div className={"w-0 h-[2px] bg-black group-hover:w-full duration-300"}/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"w-full h-[1px] bg-neutral-300"}></div>

            {/* Services */}
            <div className={"w-full flex flex-col justify-start items-start relative"}>
                <div className={"flex flex-col gap-5"}>
                    <p className={"text-[32px] font-[400]"}>I provide high-quality services:</p>
                    <div className={"text-[48px] leading-none font-bold flex gap-5"}>
                        <div className={"py-6 px-8 border border-neutral-200 rounded-[20px]"}>Mobile Apps</div>
                        <div className={"py-6 px-8 border border-neutral-200 rounded-[20px]"}>Websites</div>
                    </div>
                    <div className={"text-[48px] leading-none font-bold flex gap-5"}>
                        <div className={"py-6 px-8 border border-neutral-200 rounded-[20px]"}>Web Dashboards</div>
                        <div className={"py-6 px-8 border border-neutral-200 rounded-[20px]"}>Design Systems</div>
                    </div>
                </div>
            </div>

            <div className={"w-full flex flex-col relative"}>
                <MainContentHoverImage height={"720px"} link={"/"} image={images.serviceImage1}/>
            </div>
            <div className={"w-full flex flex-col relative overflow-hidden"}>
                <Slider/>
            </div>
            <div className={"w-full flex gap-10"}>
                <MainContentHoverImage height={"720px"} link={"/"} image={images.serviceImage1}/>
                <MainContentHoverImage height={"720px"} link={"/"} image={images.serviceImage1}/>
            </div>
            <div className={"w-full flex flex-col relative"}>
                <MainContentHoverImage height={"720px"} link={"/"} image={images.serviceImage1}/>
            </div>
        </div>
    )
}

export default MainContent;
