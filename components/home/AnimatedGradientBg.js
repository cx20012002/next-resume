function AnimatedGradientBg() {
    return (
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
    )
}

export default AnimatedGradientBg;
