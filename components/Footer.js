import LinkButton from "@/components/LinkButton";

function Footer() {
    return (
        <div className={"w-full px-20 lg:pt-[120px] lg:pb-[200px] pt-[80px] pb-[120px] bg-white flex flex-col items-start gap-10 z-10 font-inter"}>
            <div className={"w-full flex flex-col justify-center items-center"}>
                <p className={"xl:text-[32px] lg:text-[24px] text-[20px] font-[400]"}>Let's talk about your project</p>
                <h1 className={"xl:text-[96px] lg:text-[72px] text-[40px] font-[700]"}>hi@yoursite.com</h1>
            </div>
            <div className={"w-full h-[1px] bg-neutral-300"}/>
            <div className={"w-full flex justify-center items-center gap-16 xl:text-[24px] lg:text-[20px] text-[16px] font-[500]"}>
                <LinkButton link={"/"} text={"Instagram"}/>
                <LinkButton link={"/"} text={"Twitter"}/>
                <LinkButton link={"/"} text={"Dribbble"}/>
            </div>
        </div>
    )
}

export default Footer;
