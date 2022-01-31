import React, { ReactNode } from "react";
import NavBar from "./NavBar";

interface ILayoutProps {
    children: ReactNode;
}

export default function Layout({children} : ILayoutProps) {
    return (
        <div className="h-screen ">
            <main className="flex">
                <NavBar />
                {children}
            </main>
        </div>
    )
}