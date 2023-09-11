'use client'

import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {parallax} from "@/utils/tools";
import {useLayoutEffect, useRef} from "react";

function ParallaxSection({children, className}) {
    const section = useRef();
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            parallax(section.current, gsap);
        }, section)

        return () => ctx.revert();

    }, [])
    return (
        <div ref={section} className={className}>{children}</div>
    )
}

export default ParallaxSection;
