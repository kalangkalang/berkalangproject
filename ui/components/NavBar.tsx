
import { navLinks } from "../utils/navbarLink"
import Link from "next/link"
import Image from "next/image"
import flower from "../public/flower.png";

export default function NavBar() {

    return (
        <div className="flex flex-col h-screen w-36 bg-zinc-200 pr-6 md:flex-none">
            <div className="flex border-b my-5 justify-end">
                <Image className="m-3" width={25} height={25} src={flower} />
                <h3 className="font-semibold">BERKALANG</h3>
            </div>
            <nav className="text-sm flex flex-col space-y-6">
                {navLinks.map((link, index) => {
                    return (
                        <ul className="flex justify-end hover:underline " key={index}>
                            <Link href={link.path}>
                                <li>{link.name}</li>
                            </Link>
                        </ul>
                    );
                })}
            </nav>
        </div>
    )
    
}