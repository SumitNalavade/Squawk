import { FiBook, FiShare2 } from "react-icons/fi";
import { RiSpeakAiLine } from "react-icons/ri";

import "../../globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <main className="flex-grow flex">
                <div className="h-full space-y-4">
                    <div className="p-4 flex flex-col gap-y-1 items-center justify-center hover:bg-gray-200 hover:cursor-pointer">
                        <FiBook className="text-3xl" />

                        <p>Sources</p>
                    </div>

                    <div className="p-4 flex flex-col gap-y-1 items-center justify-center hover:bg-gray-200 hover:cursor-pointer">
                        <RiSpeakAiLine className="text-3xl" />

                        <p>Tone</p>
                    </div>

                    <div className="p-4 flex flex-col gap-y-1 items-center justify-center hover:bg-gray-200 hover:cursor-pointer">
                        <FiShare2 className="text-3xl" />

                        <p>Share</p>
                    </div>
                </div>

                <section className="w-full">
                    {children}
                </section>
            </main>
        </div>
    );
}
