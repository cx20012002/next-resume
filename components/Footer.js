import LinkButton from "@/components/LinkButton";

function Footer() {
    return (
        <div className={"w-full px-20 pt-[120px] pb-[200px] bg-white flex flex-col items-start gap-10 z-10 font-inter"}>
            <div className={"w-full flex flex-col justify-center items-center"}>
                <p className={"text-[32px] font-[400]"}>Let's talk about your project</p>
                <h1 className={"text-[96px] font-[700]"}>hi@yoursite.com</h1>
            </div>
            <div className={"w-full h-[1px] bg-neutral-300"}/>
            <div className={"w-full flex justify-center items-center gap-16 text-[24px] font-[500]"}>
                <LinkButton link={"/"} text={"Instagram"}/>
                <LinkButton link={"/"} text={"Twitter"}/>
                <LinkButton link={"/"} text={"Dribbble"}/>
            </div>
        </div>
    )
}

export default Footer;
