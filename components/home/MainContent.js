import Link from "next/link";
import {images} from "@/utils/images";
import Slider from "@/components/home/Slider";
import LinkButton from "@/components/LinkButton";
import MainContentHoverImage from "@/components/MainContentHoverImage";

function MainContent() {
    return (
        <div className={`max-w-[1440px] w-full h-fit flex flex-col xl:gap-[80px] gap-[40px] items-center 
            bg-[rgba(255,255,255,0.64)] backdrop-blur-[64px] backdrop-filter:blur rounded-t-[40px] 
            relative xl:py-[120px] xl:px-[80px] lg:py-[80px] lg:px-[40px] py-[40px] px-[20px] z-10`}>
            {/* Introduce Section */}
            <div className={"w-full flex flex-col flex-none justify-start items-start xl:gap-10 gap-5 relative section"}>
                {/* Title */}
                <div className={"flex justify-start flex-shrink"}>
                    <h1 className={"xl:text-[96px] sm:text-[72px] text-[40px] font-bold tracking-tight"}>
                        Hi, I'm David
                    </h1>
                </div>

                {/* Content */}
                <div className={"flex flex-col md:flex-row xl:gap-[160px] lg:gap-[120px] gap-[40px] relative w-full"}>
                    {/* Left Column */}
                    <div className={"flex flex-col flex-1 items-start xl:gap-10 gap-5"}>
                        <div className={"flex flex-col justify-start flex-shrink-0"}>
                            <p className={"xl:text-[32px] sm:text-[24px] text-[20px] font-[400]"}>A freelance designer
                                with a focus on creating highly polished interfaces. I have over 15 years of experience
                                in doing that.
                            </p>
                        </div>
                        <div className={"flex flex-col xl:max-w-[480px] lg:w-full w-[80%] xl:h-[80px] h-[60px] " +
                            "text-white xl:text-[24px] text-[20px] font-[600]"}>
                            <Link href={"/"} className={`flex justify-between items-center w-full bg-black py-4 px-10 
                            rounded-full h-[80px] group overflow-hidden relative`}>
                                <span className={`xl:group-hover:translate-x-4 group-hover:text-white 
                                xl:group-hover:text-black duration-300 z-20`}>
                                    Let's talk
                                </span>
                                <svg width="24" height="24" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg"
                                     className={"xl:group-hover:-translate-x-4 duration-300 z-20 xl:w-6 w-5"}>
                                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                                          fill="white" className={"group-hover:fill-white xl:group-hover:fill-black"}/>
                                </svg>
                                <div className={`absolute inset-x-[150] w-[800px] h-[800px] bg-neutral-300 top-[90px] 
                                    left-0 -translate-x-[150px] z-10 rounded-full group-hover:-top-[120px] 
                                    duration-300 xl:block hidden`}/>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className={"flex flex-col overflow-hidden relative gap-5"}>
                        <div className={"flex flex-col justify-start flex-shrink-0"}>
                            <h3 className={"xl:text-[40px] lg:text-[32px] text-[24px] font-[600]"}>Follow me:</h3>
                        </div>
                        <div className={`flex flex-col overflow-hidden xl:text-[24px] lg:text-[20px] text-[16px] 
                        font-[500] relative`}>
                            <ul className={"flex md:flex-col flex-row md:gap-4 gap-10"}>
                                <li className={"flex flex-col items-start"}>
                                    <LinkButton link={"/"} text={"Instagram"}/>
                                </li>
                                <li className={"flex flex-col items-start"}>
                                    <LinkButton link={"/"} text={"Twitter"}/>
                                </li>
                                <li className={"flex flex-col items-start"}>
                                    <LinkButton link={"/"} text={"Dribbble"}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className={"w-full h-[1px] bg-neutral-300"}></div>

            {/* Services */}
            <div className={"w-full flex flex-col justify-start items-start relative section"}>
                <div className={"flex flex-col xl:gap-5 gap-3"}>
                    <p className={"xl:text-[32px] md:text-[24px] text-[20px] font-[400]"}>
                        I provide high-quality services:
                    </p>
                    <div className={`xl:text-[48px] md:text-[44px] text-[32px] leading-none font-bold items-start 
                    justify-start flex flex-col xl:flex-row xl:gap-5 gap-3`}>
                        <div className={"xl:py-6 xl:px-8 py-4 px-6 border border-neutral-200 rounded-[20px]"}>
                            Mobile Apps
                        </div>
                        <div className={"xl:py-6 xl:px-8 py-4 px-6 border border-neutral-200 rounded-[20px]"}>
                            Websites
                        </div>
                    </div>
                    <div className={`xl:text-[48px] md:text-[44px] text-[32px] leading-none font-bold items-start 
                    justify-start flex flex-col xl:flex-row xl:gap-5 gap-3`}>
                        <div className={"xl:py-6 xl:px-8 py-4 px-6 border border-neutral-200 rounded-[20px]"}>
                            Web Dashboards
                        </div>
                        <div className={"xl:py-6 xl:px-8 py-4 px-6 border border-neutral-200 rounded-[20px]"}>
                            Design Systems
                        </div>
                    </div>
                </div>
            </div>

            <div className={"w-full flex flex-col relative section"}>
                <MainContentHoverImage link={"/"} image={images.serviceImage1}/>
            </div>
            <div className={"w-full flex flex-col relative overflow-hidden section"}>
                <Slider/>
            </div>
            <div className={"w-full flex flex-col md:flex-row gap-10 section"}>
                <MainContentHoverImage link={"/"} image={images.serviceImage2}/>
                <MainContentHoverImage link={"/"} image={images.serviceImage3}/>
            </div>
            <div className={"w-full flex flex-col relative section"}>
                <MainContentHoverImage link={"/"} image={images.serviceImage4}/>
            </div>
        </div>
    )
}

export default MainContent;
