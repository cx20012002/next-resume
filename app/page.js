'use client'

import {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import Header from "@/components/home/Header";
import NameCard from "@/components/home/NameCard";
import AnimatedGradientBg from "@/components/home/AnimatedGradientBg";
import MainContent from "@/components/home/MainContent";
import Slider from "@/components/home/Slider";
import {horizontalLoop} from "@/utils/infinitySlide";


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

            // Fixed Nav Animation
            const fixedNav = document.querySelector('.fixed-nav');
            gsap.to(fixedNav, {
                scrollTrigger: {
                    trigger: '.anim-bg',
                    start: 'top top',
                    toggleActions: 'play none none reverse',
                },
                translateY: -100,
                duration: 0.2,
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

        }, app)

        return () => ctx.revert();

    }, [])

    return (
        <main className={"w-full items-center flex flex-col bg-neutral-50 font-inter relative"} ref={app}>
            <Header/>
            <NameCard/>
            <AnimatedGradientBg/>
            <MainContent/>
        </main>
    )
}
