import Image from "next/image";
import {images} from "@/utils/images"
import ContactButton from "@/components/ContactButton";

function Nav() {
    return (
        <div
            className={"fixed -bottom-[80px] rounded-[100px] w-[400px] h-[80px] bg-[rgba(210,210,210,0.8)] backdrop-blur-[20px] backdrop-filter:blur z-20 flex justify-between items-center pl-2 pr-4 fixed-nav"}>
            <div className={"w-[64px] h-[64px] bg-red-400 rounded-full overflow-hidden justify-center items-center"}>
                <Image src={images.photo} alt={""}/>
            </div>
            <div className={"flex gap-5 h-[48px] items-center"}>
                <div className={"text-[20px] font-[500]"}>About</div>
                <ContactButton/>
            </div>
        </div>
    )
}

export default Nav;
