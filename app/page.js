'use client'

import Image from 'next/image'
import Link from "next/link";
import {images} from '@/utils/images';
import {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";


export default function Home() {
    const app = useRef();
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Name Card Animation with ScrollTrigger
            gsap.to('.name-card', {
                scrollTrigger: {
                    trigger: '.name-card',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 0.5,
                },
                rotationY: 20,
                translateY: -10,
                translateX: 10
            })

            // Hero Text Animation
            gsap.to('.hero-anim-text div', {
                translateY: 80,
                repeat: -1,
                yoyo: true,
                ease: 'none',
                duration: 2,
            })

            gsap.to('.hero-anim-text div:first-child', {
                translateY: 80,
                opacity: 0.6,
                duration: 1.5,
                ease: 'none',
                repeat: -1,
                yoyo: true,
            })

            gsap.to('.hero-anim-text div:last-child', {
                translateY: 0,
                opacity: 0.6,
                duration: 2,
                ease: 'none',
                repeat: -1,
                yoyo: true,
            })

            // Hero Background Animation
            gsap.timeline({repeat: -1, yoyo: true})
                .to('.blur-bg-right', {
                    translateX: 40,
                    translateY: 40,
                    scale: 1.1,
                    duration: 2,
                    ease: 'none',
                }).to('.blur-bg-left', {
                translateX: 40,
                translateY: -40,
                duration: 3,
                ease: 'none',
            }, '<')


            // Hide Background Animation on Scroll
            gsap.to('.anim-bg', {
                scrollTrigger: {
                    trigger: '.anim-bg',
                    start: 'top top',
                    end: '15% top',
                    scrub: 0.5,
                },
                opacity: 0,
            })

        }, app)

        return () => ctx.revert();

    }, [])

    return (
        <main className={"w-full items-center flex flex-col bg-neutral-50 font-inter relative h-[300vh]"} ref={app}>
            {/* Header */}
            <nav className={"w-full flex justify-between px-16 py-10"}>
                <div>
                    <Link href={"/"} as={"/"} className={"flex gap-2 items-center"}>
                        <div>
                            <Image src={images.star} alt={""} width={24} height={24}/>
                        </div>
                        <div className={"text-[32px] tracking-tight font-bold"}>david</div>
                    </Link>
                </div>
                <div className={"flex items-center gap-10 text-[20px] font-[500]"}>
                    <Link href={"/"} as={"/"} className={""}>About</Link>
                    <div className={"px-6 bg-white py-4 rounded-full"}>
                        <Image src={images.mail} alt={""}/>
                    </div>
                </div>
            </nav>

            {/* Fixed Name Card */}
            <div className={"w-[400px] h-[768px] fixed top-0 z-10 name-card"}
                 style={{transform: "perspective(1200px)"}}>
                {/* Card Body */}
                <div
                    className={"absolute top-[200px] bg-white items-center min-h-[300px] p-[40px] pt-[80px] w-full flex flex-col rounded-3xl"}>
                    {/* Card Hole */}
                    <div className={"h-[12px] overflow-hidden absolute top-[32px] w-[80px] bg-blue-300 rounded-full"}
                         style={{
                             left: "calc(50% - 80px / 2)",
                             background: "linear-gradient(180deg, #b3b3b3 0%, rgb(255 255 255 / 0%) 100%)"
                         }}/>

                    {/* Card Content */}
                    <div
                        className={"flex flex-col justify-center items-center self-stretch flex-nowrap overflow-hidden relative gap-[40px]"}>
                        {/* Upper Content */}
                        <div className={"w-full flex flex-col gap-4"}>
                            <div className={"flex w-full gap-3 items-center"}>
                                <h2 className={"text-5xl font-bold"}>David</h2>
                                <div className={"h-[2px] w-full bg-black"}></div>
                            </div>
                            <div className={"flex w-full gap-5 items-center"}>
                                <h2 className={"text-5xl font-bold"}>Robertson</h2>
                            </div>
                            <div className={"flex w-full gap-5 items-center"}>
                                <p className={"text-2xl font-[500]"}>Freelance Designer</p>
                            </div>
                        </div>

                        {/* Photo */}
                        <div
                            className={"relative w-full h-[240px] rounded-full overflow-hidden flex items-center group"}>
                            <Image src={images.photo} alt={""} className={"group-hover:scale-125 duration-300"}/>
                        </div>
                    </div>
                </div>

                {/*Card Strap*/}
                <div
                    className={"absolute w-[64px] h-[240px] overflow-hidden top-0 bg-red-400 left-1/2 -translate-x-1/2"}
                    style={{background: "linear-gradient(180deg, #ffcc00 0%, rgb(255, 83, 248) 100%)"}}/>
            </div>

            {/* Background Gradient */}
            <div className={"max-w-[1440px] w-full h-screen relative anim-bg"}>
                <div className={"aspect-square absolute w-[40%] h-[480px] rounded-full top-[120px] blur-bg-right"}
                     style={{
                         filter: "blur(80px)",
                         background: "linear-gradient(180deg, #f9d1ff 0%, #FFF0DB 100%)",
                         left: "calc(70% - 40% / 2)"
                     }}/>
                <div className={"aspect-square absolute w-[56%] h-[672px] rounded-full top-[160px] blur-bg-left"}
                     style={{
                         filter: "blur(80px)",
                         background: "linear-gradient(180deg, #f9d1ff 0%, #FFF0DB 100%)",
                         left: "calc(33% - 56% / 2)"
                     }}/>
                <div className={`w-[1112px] absolute h-[260px] top-[200px] opacity-10 left-1/2 -translate-x-[52%]
                     text-[140px] font-black flex justify-between hero-anim-text`}>
                    <div className={"self-start"}>Scroll</div>
                    <div className={"translate-y-[80px]"}>down</div>
                </div>
            </div>

            {/* Main Content */}
            <div className={`max-w-[1440px] w-full flex flex-col gap-[80px] items-center 
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
            </div>
        </main>
    )
}
