function Slider() {
    return (
        <ul className={"flex w-full slider"}>
            {Array.from({length: 5}).map((_, index) =>
                <li className={"px-10"} key={index}>
                    <div className={"w-[500px] flex flex-col items-start gap-5"}>
                        <div className={"w-[64px] h-[64px] p-3"}>
                            <svg className={"w-full h-full"} viewBox="0 0 14 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 10H4L6 6V0H0V6H3L1 10ZM9 10H12L14 6V0H8V6H11L9 10Z" fill="black"/>
                            </svg>
                        </div>
                        <h2 className={"xl:text-[48px] md:text-[44px] text-[32px] font-[700] leading-tight"}>David is a highly meticulous and skilled
                            designer. I really loved working with him.</h2>
                        <p className={"xl:text-[24px] md:text-[20px] text-[16px] font-[500] text-neutral-500"}>Alice - CompanyName</p>
                    </div>
                </li>
            )}
        </ul>
    )
}

export default Slider;
