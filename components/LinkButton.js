import Image from "next/image";
import {images} from "@/utils/images";
import Link from "next/link";

function LinkButton({link, text}) {
    return (
        <Link href={link} as={link} className={"flex flex-col items-start gap-1 group"}>
            <div className={"flex items-center gap-2"}>
                <Image src={images.star} width={16} height={16} alt={"star"}/>
                <p>{text}</p>
            </div>
            <div className={"w-0 h-[2px] bg-black group-hover:w-full duration-300"}/>
        </Link>
    )
}

export default LinkButton;
