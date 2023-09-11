export const parallax = (selector, gsap) => {
    const sections = gsap.utils.toArray(selector);
    sections.forEach((section) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 80%',
                // markers: true,
                toggleActions: 'play none none reverse',
            }
        })
        tl.fromTo(section, {
            opacity: 0,
            translateY: 100,
        }, {
            opacity: 1,
            translateY: 0,
            duration: 1,
        })
    })
}

