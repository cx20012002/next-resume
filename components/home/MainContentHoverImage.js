import Image from "next/image";
import Link from "next/link";

function MainContentHoverImage({height="720px", link, image}) {
    return (
        <Link href={link} as={link}
              className={`w-full h-[${height}] flex flex-col items-start rounded-3xl overflow-hidden relative group/img hover:rounded-[40px] duration-300`}>
            <Image src={image} alt={"service"} className={"w-full h-full object-cover"}/>
            <div className={`absolute opacity-0 w-0 h-0 rounded-full bg-white left-1/2 top-1/2 -translate-x-1/2 
                        -translate-y-1/2 flex justify-center items-center group-hover/img:w-[120px] 
                        group-hover/img:h-[120px] group-hover/img:opacity-100 hover:bg-black duration-300 group/svg`}>
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24" width={40}
                     height={40} className={"group-hover/svg:scale-[1.3] duration-300"}>
                    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"
                          className={"group-hover/svg:fill-white"}></path>
                </svg>
            </div>
        </Link>
    )
}

export default MainContentHoverImage;
