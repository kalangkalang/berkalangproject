
import { navLinks } from "../utils/navbarLink"
import Link from "next/link"

export default function NavBar() {

    return (
        <div className="h-screen w-60 bg-zinc-200 pl-10 pr-6">
            <div className="border-b mt-8">
                <h3>NAV BAR</h3>
                {/* Tambahin Icon disini */}
            </div>
            <nav className="text-sm flex flex-col space-y-6">
                {navLinks.map((link, index) => {
                    return (
                        <ul className="flex justify-end" key={index}>
                            <Link href={link.path}>
                                <li>{link.name}</li>
                            </Link>
                        </ul>
                    )
                })}
            </nav>
        </div>
    )
    
}