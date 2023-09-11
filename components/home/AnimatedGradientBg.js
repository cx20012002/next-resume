'use client'

import {useLayoutEffect} from "react";
import {horizontalLoop} from "@/utils/infinitySlide";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

function AnimatedGradientBg() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
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
            gsap.to('.start-bg', {
                scrollTrigger: {
                    trigger: '.start-bg',
                    start: 'top top',
                    end: '15% top',
                    scrub: 0.5,
                },
                opacity: 0,
            })

            // Infinity Slider Animation
            const slider = document.querySelector('.slider');
            const slider_items = gsap.utils.toArray('.slider li');

            const loopSlider = horizontalLoop(slider_items, {speed: 0.6, repeat: -1}, gsap);

            slider.onmouseenter = () => {
                loopSlider.timeScale(0.3);
            }

            slider.onmouseleave = () => {
                loopSlider.timeScale(0.6);
            }
        })

        return () => ctx.revert();

    }, []);

    return (
        <div className={"max-w-[1440px] w-full h-screen relative start-bg"}>
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
            <div className={`w-[1112px] absolute h-[260px] md:top-[200px] top-[500px] opacity-10 left-1/2 md:-translate-x-[52%] -translate-x-1/2
                     md:text-[140px] text-[80px] font-black flex justify-center md:justify-between hero-anim-text`}>
                <div className={"self-start"}>Scroll</div>
                <div className={"md:translate-y-[80px] translate-y-0"}>down</div>
            </div>
        </div>
    )
}

export default AnimatedGradientBg;
