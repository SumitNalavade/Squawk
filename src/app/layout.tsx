import type { Metadata } from "next";
import "./globals.css";

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
      <body
        className={`antialiased`}
      >
        { /* Navbar */}
        <div className="text-black px-4 py-6 font-bold">
          <div className="container mx-auto flex items-center justify-between">
            {/* Left Items */}
            <div className="flex space-x-8 items-center">
              <button className="bg-[#2c2c2c] text-white px-10 py-2 rounded-md hover:bg-zinc-900">
                Logo
              </button>

              <a href="#" className="hover:text-zinc-900">
                Product
              </a>
              <a href="#" className="hover:text-zinc-900">
                Resources
              </a>
              <a href="#" className="hover:text-zinc-900">
                Pricing
              </a>
            </div>

            {/* Right Item */}
            <div>
              <button className="bg-[#2c2c2c] text-white px-8 py-2 rounded-md">
                Try it for free
              </button>
            </div>
          </div>
        </div>

        <div >
          {children}
        </div>

        { /* Footer */}
        <div className="bg-gray-100 text-black px-4 py-6 font-bold">
          <div className="container mx-auto flex justify-between">
            <div className="flex flex-col items-center space-y-2">
              <button className="bg-[#2c2c2c] text-white px-10 py-2 rounded-md hover:bg-zinc-900">
                Logo
              </button>

              <div className='flex justify-around w-full'>
                <a href=""><FaXTwitter className='text-lg' /></a>
                <a href=""><BiLogoInstagram className='text-lg' /></a>
                <a href=""><BiLogoYoutube className='text-lg' /></a>
                <a href=""><BiLogoLinkedinSquare className='text-lg' /></a>
              </div>
            </div>

            {/* Left Items */}
            <div className='w-full flex justify-evenly font-normal'>
              <ul>
                <p className='text-xl pb-2 font-bold'>Use Cases</p>
                <li className='text-sm'>Customer Service</li>
                <li className='text-sm'>Small Business</li>
                <li className='text-sm'>Educators</li>
              </ul>

              {/* Middle Items */}
              <ul>
                <p className='text-xl pb-2 font-bold'>Resources</p>
                <li className='text-sm'>Demo</li>
                <li className='text-sm'>Tutorial</li>
                <li className='text-sm'>Documentation</li>
              </ul>

              {/* Right Items */}
              <ul>
                <p className='text-xl pb-2 font-bold'>Contact</p>
                <li className='text-sm'>Email</li>
                <li className='text-sm'>LinkedIn</li>
                <li className='text-sm'>Instagram</li>
                <li className='text-sm'>YouTube</li>
              </ul>
            </div>
          </div>
        </div>

      </body>
    </html>
  );
}
