import Link from "next/link";
import { FiBox, FiTrash2 } from "react-icons/fi";

const SourcesPage: React.FC = () => {
    return (
        <div className="w-full flex flex-col items-center py-4 space-y-4 container max-w-5xl mx-auto">
            <div className="flex px-4 py-3 rounded-xl border border-gray-200 overflow-hidden w-full mx-auto font-[sans-serif]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                    className="fill-gray-600 mr-3 rotate-90">
                    <path
                        d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                    </path>
                </svg>
                <input type="email" placeholder="Search Templates" className="w-full outline-none bg-transparent text-gray-600 text-sm" />
            </div>

            <div>
                <ul
                    className="mb-5 flex list-none flex-row flex-wrap border-b-0 ps-0 justify-center w-full"
                    role="tablist"
                    data-twe-nav-ref>
                    <li role="presentation">
                        <a
                            href="#tabs-home"
                            className="my-2 block border-x-0 border-b-2 border-t-0 px-7 pb-2 pt-4 text-xs font-bold uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                            data-twe-toggle="pill"
                            data-twe-target="#tabs-home"
                            data-twe-nav-active
                            role="tab"
                            aria-controls="tabs-home"
                            aria-selected="true"
                        >Top Picks</a>
                    </li>
                    <li role="presentation">
                        <a
                            href="#tabs-profile"
                            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-2 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                            data-twe-toggle="pill"
                            data-twe-target="#tabs-profile"
                            role="tab"
                            aria-controls="tabs-profile"
                            aria-selected="false"
                        >Education</a>
                    </li>
                    <li role="presentation">
                        <a
                            href="#tabs-messages"
                            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-2 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
                            data-twe-toggle="pill"
                            data-twe-target="#tabs-messages"
                            role="tab"
                            aria-controls="tabs-messages"
                            aria-selected="false"
                        >Customer Service</a>
                    </li>
                    <li role="presentation">
                        <a
                            href="#tabs-contact"
                            className="disabled pointer-events-none my-2 block border-x-0 border-b-2 border-t-0 border-transparent bg-transparent px-7 pb-2 pt-4 text-xs font-medium uppercase leading-tight text-neutral-400 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-600"
                            data-twe-toggle="pill"
                            data-twe-target="#tabs-contact"
                            role="tab"
                            aria-controls="tabs-contact"
                            aria-selected="false"
                        >Small Business</a>
                    </li>

                    <li role="presentation">
                        <a
                            href="#tabs-contact"
                            className="disabled pointer-events-none my-2 block border-x-0 border-b-2 border-t-0 border-transparent bg-transparent px-7 pb-2 pt-4 text-xs font-medium uppercase leading-tight text-neutral-400 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-600"
                            data-twe-toggle="pill"
                            data-twe-target="#tabs-contact"
                            role="tab"
                            aria-controls="tabs-contact"
                            aria-selected="false"
                        >Healthcare</a>
                    </li>

                    <li role="presentation">
                        <a
                            href="#tabs-contact"
                            className="disabled pointer-events-none my-2 block border-x-0 border-b-2 border-t-0 border-transparent bg-transparent px-7 pb-2 pt-4 text-xs font-medium uppercase leading-tight text-neutral-400 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-600"
                            data-twe-toggle="pill"
                            data-twe-target="#tabs-contact"
                            role="tab"
                            aria-controls="tabs-contact"
                            aria-selected="false"
                        >Portfolio</a>
                    </li>
                </ul>

                <div className="mb-6 flex w-full justify-between items-center gap-x-4">
                    <div className="w-full space-y-4">
                        <Link href={"/create/new/sources"} className="border border-1 border-gray-200 rounded-lg p-4 flex items-center gap-x-6 hover:bg-gray-100 hover:cursor-pointer">
                            <FiBox className="text-3xl" />

                            <div className="text-sm">
                                <p className="font-bold">ECEN 314 Virtual TA</p>
                                <p>A virtual teaching assistant for ECEN 314 (Signals & Systems)</p>
                            </div>
                        </Link>

                        <Link href={"/create/new/sources"} className="border border-1 border-gray-200 rounded-lg p-4 flex items-center gap-x-6 hover:bg-gray-100 hover:cursor-pointer">
                            <FiBox className="text-3xl" />

                            <div className="text-sm">
                                <p className="font-bold">ECEN 314 Virtual TA</p>
                                <p>A virtual teaching assistant for ECEN 314 (Signals & Systems)</p>
                            </div>
                        </Link>
                    </div>

                    <div className="w-full space-y-4">
                        <Link href={"/create/new/sources"} className="border border-1 border-gray-200 rounded-lg p-4 flex items-center gap-x-6 hover:bg-gray-100 hover:cursor-pointer">
                            <FiBox className="text-3xl" />

                            <div className="text-sm">
                                <p className="font-bold">ECEN 314 Virtual TA</p>
                                <p>A virtual teaching assistant for ECEN 314 (Signals & Systems)</p>
                            </div>
                        </Link>

                        <Link href={"/create/new/sources"} className="border border-1 border-gray-200 rounded-lg p-4 flex items-center gap-x-6 hover:bg-gray-100 hover:cursor-pointer">
                            <FiBox className="text-3xl" />

                            <div className="text-sm">
                                <p className="font-bold">ECEN 314 Virtual TA</p>
                                <p>A virtual teaching assistant for ECEN 314 (Signals & Systems)</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="w-full space-y-4">
                <p className="font-bold text-xl">Your Projects</p>

                <Link href={"/create/new/sources"} className="border border-1 border-gray-200 rounded-lg p-4 flex items-center gap-x-6 hover:bg-gray-100 hover:cursor-pointer">
                    <FiBox className="text-3xl" />

                    <div className="text-sm w-full">
                        <p className="font-bold">ECEN 314 Virtual TA</p>
                        <p>A virtual teaching assistant for ECEN 314 (Signals & Systems)</p>
                    </div>

                    <div className="cursor-pointer">
                        <FiTrash2 className="text-3xl" />
                    </div>
                </Link>

                <Link href={"/create/new/sources"} className="border border-1 border-gray-200 rounded-lg p-4 flex items-center gap-x-6 hover:bg-gray-100 hover:cursor-pointer">
                    <FiBox className="text-3xl" />

                    <div className="text-sm w-full">
                        <p className="font-bold">ECEN 314 Virtual TA</p>
                        <p>A virtual teaching assistant for ECEN 314 (Signals & Systems)</p>
                    </div>

                    <div className="cursor-pointer">
                        <FiTrash2 className="text-3xl" />
                    </div>
                </Link>

                <Link href={"/create/new/sources"} className="border border-1 border-gray-200 rounded-lg p-4 flex items-center gap-x-6 hover:bg-gray-100 hover:cursor-pointer">
                    <FiBox className="text-3xl" />

                    <div className="text-sm w-full">
                        <p className="font-bold">ECEN 314 Virtual TA</p>
                        <p>A virtual teaching assistant for ECEN 314 (Signals & Systems)</p>
                    </div>

                    <div className="cursor-pointer">
                        <FiTrash2 className="text-3xl" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default SourcesPage;