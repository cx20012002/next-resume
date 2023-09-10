import Link from "next/link";
import Image from "next/image";
import {images} from "@/utils/images";
import ContactButton from "@/components/ContactButton";

function Header() {
    return (
        <nav className={"w-full flex justify-between md:px-16 px-3 py-10"}>
            <div>
                <Link href={"/"} as={"/"} className={"flex gap-2 items-center"}>
                    <div className={"md:scale-100 scale-75"}>
                        <Image src={images.star} alt={""} width={24} height={24}/>
                    </div>
                    <div className={"md:text-[32px] text-[24px] tracking-tight font-bold"}>david</div>
                </Link>
            </div>
            <div className={"flex items-center gap-10 md:text-[20px] text-[15px] font-[500]"}>
                <Link href={"/"} as={"/"} className={""}>About</Link>
                <ContactButton/>
            </div>
        </nav>
    )
}

export default Header;
