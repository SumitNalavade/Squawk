import Link from "next/link";
import Image from "next/image";
import "../globals.css";

import { RxAvatar } from "react-icons/rx";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen">
                { /* Navbar */}
                <div className="text-gray-500 px-4 py-6 font-bold portrait:sticky">
                    <div className="container mx-auto flex items-center justify-between">
                        {/* Left Items */}
                        <Link href={"/"} className="pb-2 mr-4">
                            <Image
                                src="/large_logo.png"
                                alt="large logo"
                                width={150}
                                height={150}
                            />
                        </Link>

                        {/* Right Item */}
                        <div className="flex space-x-8 items-center text-sm">
                            <a href="#" className="hover:text-gray-600 font-normal">
                                My Projects
                            </a>

                            <Link href={"/create/new"} className="bg-[#2c2c2c] text-white px-6 py-2 rounded-md">
                                New Project
                            </Link>

                            <Link href={'/profile'}>
                                <RxAvatar className="text-4xl" />
                            </Link>
                        </div>
                    </div>
                </div>

                { /* Content Area */}
                <main className="flex-grow flex items-center justify-center">
                    <section className="h-full flex flex-col lg:flex-row w-full pb-4">
                        {children}
                    </section>
                </main>

            </body>

        </html>
    );
}
