import Header from "@/components/home/Header";
import ParallaxSection from "@/components/ParallaxSection";

function Contact() {
    return (
        <main className={"w-full items-center flex flex-col bg-neutral-50 font-inter overflow-hidden relative"}>
            <Header/>
            <div className={"max-w-[1600px] w-full flex flex-col xl:p-20 xl:pb-40 p-10 xl:gap-20 gap-20 start-bg"}>
                <ParallaxSection className={"w-full flex flex-col relative  gap-20 opacity-0"}>
                    <div className={"w-[600px] h-[600px] absolute top-[22px] left-[181px] rounded-full"}
                         style={{
                             background: "linear-gradient(180deg, rgb(249, 209, 255) 0%, rgb(255, 240, 219) 100%)",
                             filter: "blur(80px)"
                         }}
                    />
                    <div className={"w-[384px] h-[384px] absolute top-[205px] left-[704px]"}
                         style={{
                             background: "linear-gradient(180deg, rgb(249, 209, 255) 0%, rgb(255, 240, 219) 100%)",
                             filter: "blur(80px)"
                         }}
                    />
                    <div className={"flex xl:flex-row flex-col w-full gap-10 z-20"}>
                        <div className={"xl:w-1/2 w-full flex flex-col gap-2.5"}>
                            <h1 className={"xl:text-[96px] md:text-[72px] text-[40px] font-[700] leading-tight"}>
                                Let's talk
                            </h1>
                            <p className={"xl:text-[32px] md:text-[24px] text-[20px] font-[400]"}>
                                I’m available for new freelance projects. Fill in the form and I’ll get back to you.
                            </p>
                        </div>
                        <div className={"xl:w-1/2 w-full"}>
                            <form className={"flex flex-col gap-5"}>
                                <input type={"text"} id={"name"} placeholder={"Name"} className={"rounded-lg xl:p-6 p-5 bg-white xl:text-[24px] sm:text-[20px] text-[16px] font-[500] outline-none"}/>
                                <input type={"email"} id={"email"} placeholder={"Email"} className={"rounded-lg xl:p-6 p-5 bg-white xl:text-[24px] sm:text-[20px] text-[16px] font-[500] outline-none"}/>
                                <textarea id={"message"} placeholder={"Message"} rows={3} className={"rounded-lg xl:p-6 p-5 bg-white xl:text-[24px] sm:text-[20px] text-[16px] font-[500] outline-none"}/>
                                <button type={"submit"} className={"rounded-lg xl:p-6 p-5 bg-black text-white xl:text-[24px] sm:text-[20px] text-[16px] font-[500] outline-none"}>Submit</button>
                            </form>
                        </div>
                    </div>
                </ParallaxSection>
            </div>
        </main>
    )
}

export default Contact;
