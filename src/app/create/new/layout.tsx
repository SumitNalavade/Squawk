'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'
import { FiBook, FiShare2 } from "react-icons/fi";
import { RiSpeakAiLine } from "react-icons/ri";

import "../../globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();

    return (
        <div className="flex flex-col w-full">
            <main className="flex-grow flex">
                <div className="h-full space-y-4">
                    <Link href={"/create/new/sources"} className={`p-4 flex flex-col gap-y-1 items-center justify-center hover:bg-gray-200 hover:cursor-pointer ${pathname === "/create/new/sources" ? "text-blue-500" : ""}`}>
                        <FiBook className="text-3xl" />

                        <p>Sources</p>
                    </Link>

                    <Link href={"/create/new/tone"} className={`p-4 flex flex-col gap-y-1 items-center justify-center hover:bg-gray-200 hover:cursor-pointer ${pathname === "/create/new/tone" ? "text-blue-500" : ""}`}>
                        <RiSpeakAiLine className="text-3xl" />

                        <p>Tone</p>
                    </Link>

                    <Link href={"/create/new/share"} className={`p-4 flex flex-col gap-y-1 items-center justify-center hover:bg-gray-200 hover:cursor-pointer ${pathname === "/create/new/share" ? "text-blue-500" : ""}`}>
                        <FiShare2 className="text-3xl" />

                        <p>Share</p>
                    </Link>

                </div>

                <section className="w-full">
                    {children}
                </section>
            </main>
        </div>
    );
}
