import Image from "next/image";
import {images} from "@/utils/images";

function NameCard() {
    return (
        <div className={"w-[400px] h-[768px] fixed top-0 z-10 name-card"}
             style={{transform: "perspective(1200px)"}}>
            {/* Card Body */}
            <div
                className={"absolute top-[200px] bg-white items-center min-h-[300px] p-[40px] pt-[80px] w-full flex flex-col rounded-3xl"}>
                {/* Card Hole */}
                <div className={"h-[12px] overflow-hidden absolute top-[32px] w-[80px] bg-blue-300 rounded-full"}
                     style={{
                         left: "calc(50% - 80px / 2)",
                         background: "linear-gradient(180deg, #b3b3b3 0%, rgb(255 255 255 / 0%) 100%)"
                     }}/>

                {/* Card Content */}
                <div
                    className={"flex flex-col justify-center items-center self-stretch flex-nowrap overflow-hidden relative gap-[40px]"}>
                    {/* Upper Content */}
                    <div className={"w-full flex flex-col gap-4"}>
                        <div className={"flex w-full gap-3 items-center"}>
                            <h2 className={"text-5xl font-bold"}>David</h2>
                            <div className={"h-[2px] w-full bg-black"}></div>
                        </div>
                        <div className={"flex w-full gap-5 items-center"}>
                            <h2 className={"text-5xl font-bold"}>Robertson</h2>
                        </div>
                        <div className={"flex w-full gap-5 items-center"}>
                            <p className={"text-2xl font-[500]"}>Freelance Designer</p>
                        </div>
                    </div>

                    {/* Photo */}
                    <div
                        className={"relative w-full h-[240px] rounded-full overflow-hidden flex items-center group"}>
                        <Image src={images.photo} alt={""} className={"group-hover:scale-125 duration-300"}/>
                    </div>
                </div>
            </div>

            {/*Card Strap*/}
            <div
                className={"absolute w-[64px] h-[240px] overflow-hidden top-0 bg-red-400 left-1/2 -translate-x-1/2"}
                style={{background: "linear-gradient(180deg, #ffcc00 0%, rgb(255, 83, 248) 100%)"}}/>
        </div>
    )
}

export default NameCard;
