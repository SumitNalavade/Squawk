import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "../globals.css";

import { FaXTwitter } from "react-icons/fa6";
import { BiLogoInstagram, BiLogoYoutube, BiLogoLinkedinSquare } from "react-icons/bi";

export const metadata: Metadata = {
  title: "Squawk",
  description: "Create custom AI agents trained on your content. Add them to your site. No coding required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        { /* Navbar */}
        <div className="text-gray-500 px-4 py-4 font-bold portrait:sticky">
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
            <Link href={"/signup"} className="bg-gradient-to-b from-[#d474f9] to-[#d6b2ff] text-white px-8 py-2 rounded-md">
              Try it for free
            </Link>
          </div>
        </div>

        { /* Content Area */}
        <main className="flex-grow flex items-center justify-center">
          {children}
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
