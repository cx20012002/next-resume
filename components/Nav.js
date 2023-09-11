'use client'

import Image from "next/image";
import {images} from "@/utils/images"
import ContactButton from "@/components/ContactButton";
import Link from "next/link";
import {useLayoutEffect} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

function Nav() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        // Fixed Nav Animation

        const ctx = gsap.context(() => {
            const fixedNav = document.querySelector('.fixed-nav');
            gsap.to(fixedNav, {
                scrollTrigger: {
                    trigger: '.start-bg',
                    start: 'top top',
                    toggleActions: 'play none none reverse',
                },
                translateY: -100,
                duration: 0.2,
            })
        })
        return () => ctx.revert();

    }, []);
    return (
        <div
            className={"fixed -bottom-[80px] rounded-[100px] w-[400px] h-[80px] bg-[rgba(210,210,210,0.8)] backdrop-blur-[20px] backdrop-filter:blur z-20 flex justify-between items-center pl-2 pr-4 fixed-nav"}>
            <div className={"w-[64px] h-[64px] bg-red-400 rounded-full overflow-hidden flex justify-center items-center"}>
                <Link href={"/"} as={"/"}><Image src={images.avatar} placeholder={"blur"} alt={""}/></Link>
            </div>
            <div className={"flex gap-5 h-[48px] items-center"}>
                <Link href={"/about"} as={"/about"} className={"text-[20px] font-[500]"}>About</Link>
                <ContactButton/>
            </div>
        </div>
    )
}

export default Nav;
