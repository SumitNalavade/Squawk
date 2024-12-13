import { RiMovieFill, RiImage2Line, RiFileTextLine } from "react-icons/ri";

const SourcesPage: React.FC = () => {
    return (
        <div className="h-full flex mx-6">
            <div className="w-full px-6 space-y-4">
                <div className="flex px-4 py-2 rounded-xl border border-gray-200 overflow-hidden w-full mx-auto font-[sans-serif]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                        className="fill-gray-600 mr-3 rotate-90">
                        <path
                            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                        </path>
                    </svg>
                    <input type="email" placeholder="Search your sources" className="w-full outline-none bg-transparent text-gray-600 text-sm" />
                </div>

                <div>
                    <button className="bg-[#2c2c2c] text-white px-6 py-2 rounded-lg w-full">
                        Upload
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-6 text-[#2c2c2c]">
                    <div className="space-y-1">
                        <div className="p-10 bg-gray-200 rounded-2xl flex justify-center items-center cursor-pointer">
                            <RiMovieFill className="text-4xl" />
                        </div>

                        <p className="text-xs text-center font-bold">lecture_14_recording.mov</p>
                    </div>

                    <div className="space-y-1">
                        <div className="p-10 border rounded-2xl flex justify-center items-center cursor-pointer hover:bg-gray-200">
                            <RiImage2Line className="text-4xl" />
                        </div>

                        <p className="text-xs text-center font-bold">reference.jpg</p>
                    </div>

                    <div className="space-y-1">
                        <div className="p-10 border rounded-2xl flex justify-center items-center cursor-pointer hover:bg-gray-200">
                            <RiFileTextLine className="text-4xl" />
                        </div>

                        <p className="text-xs text-center font-bold">syllabus.pdf</p>
                    </div>

                    <div className="space-y-1">
                        <div className="p-10 border rounded-2xl flex justify-center items-center cursor-pointer hover:bg-gray-200">
                            <RiFileTextLine className="text-4xl" />
                        </div>

                        <p className="text-xs text-center font-bold">study_guide.pdf</p>
                    </div>
                </div>


            </div>

            <div className="w-full flex justify-center items-center border rounded-xl">
                <RiMovieFill className="text-6xl text-[#2c2c2c]" />
            </div>
        </div>
    )
}

export default SourcesPage;