import Link from "next/link";
import Image from "next/image";
import "../globals.css";

import { FaXTwitter } from "react-icons/fa6";
import { BiLogoInstagram, BiLogoYoutube, BiLogoLinkedinSquare } from "react-icons/bi";

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
                        <div className="flex space-x-8 items-center">
                            <Link href={"/"} className="pb-2 mr-4">
                                <Image
                                    src="/large_logo.png"
                                    alt="large logo"
                                    width={150}
                                    height={150}
                                />
                            </Link>

                            <a href="#" className="hover:text-gray-600">
                                Product
                            </a>
                            <a href="#" className="hover:text-gray-600">
                                Resources
                            </a>
                            <a href="#" className="hover:text-gray-600">
                                Pricing
                            </a>
                        </div>

                        {/* Right Item */}
                        <Link href={"/signup"} className="bg-[#2c2c2c] text-white px-8 py-2 rounded-md">
                            Try it for free
                        </Link>
                    </div>
                </div>

                { /* Content Area */}
                <main className="flex-grow flex items-center justify-center">
                    <section className="h-screen flex flex-col lg:flex-row w-full">
                        <div className="flex flex-col justify-center items-center space-y-12 w-full lg:w-1/2 bg-[#2c2c2c] text-white font-bold px-8">
                            <div className="space-y-4 max-w-2xl">
                                <div>
                                    <p className="text-5xl text-center leading-snug font-extrabold">Smarter Conversations, Simplified</p>
                                </div>
                                <div className="text-white">
                                    <p className="text-center">Create custom AI agents trained on your content.</p>
                                    <p className="text-center">Add them to your site. No coding required.</p>
                                </div>
                            </div>

                            <button className="bg-white border py-2 w-full max-w-md rounded-lg mt-5 flex justify-center items-center text-sm hover:bg-gray-200 hover:scale-105 duration-300 text-[#1C1C1C]">
                                <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                                </svg>
                                Login with Google
                            </button>

                            <div className="flex items-center w-full max-w-md space-x-2">
                                <hr className="flex-grow border-white" />
                                <p className="text-sm text-white">OR</p>
                                <hr className="flex-grow border-white" />
                            </div>

                            {children}

                        </div>

                        <div className="flex items-center justify-center w-full lg:w-1/2">
                            <div className="w-full flex justify-center items-center">
                                <Image
                                    src="/auth_page_demo.png"
                                    alt="auth page demo"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </div>
                    </section>
                </main>

                { /* Footer */}
                <footer className="bg-gray-100 text-black px-4 py-6 font-bold">
                    <div className="container mx-auto flex justify-between">
                        <div className="flex flex-col items-center space-y-2">
                            <Image
                                src="/large_logo.png"
                                alt="large logo"
                                width={200}
                                height={200}
                            />

                            <div className='flex justify-around w-full'>
                                <a href=""><FaXTwitter className='text-lg' /></a>
                                <a href=""><BiLogoInstagram className='text-lg' /></a>
                                <a href=""><BiLogoYoutube className='text-lg' /></a>
                                <a href=""><BiLogoLinkedinSquare className='text-lg' /></a>
                            </div>
                        </div>

                        <div className='w-full flex justify-evenly font-normal'>
                            <ul>
                                <p className='text-xl pb-2 font-bold text-[#2c2c2c]'>Use Cases</p>
                                <li className='text-sm'>Customer Service</li>
                                <li className='text-sm'>Small Business</li>
                                <li className='text-sm'>Educators</li>
                            </ul>

                            <ul>
                                <p className='text-xl pb-2 font-bold text-[#2c2c2c]'>Resources</p>
                                <li className='text-sm'>Demo</li>
                                <li className='text-sm'>Tutorial</li>
                                <li className='text-sm'>Documentation</li>
                            </ul>

                            <ul>
                                <p className='text-xl pb-2 font-bold text-[#2c2c2c]'>Contact</p>
                                <li className='text-sm'>Email</li>
                                <li className='text-sm'>LinkedIn</li>
                                <li className='text-sm'>Instagram</li>
                                <li className='text-sm'>YouTube</li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </body>

        </html>
    );
}
