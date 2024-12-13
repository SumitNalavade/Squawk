import { IoCodeSharp } from "react-icons/io5";
import { RiMovieFill } from "react-icons/ri";

const CustomTone: React.FC = () => {
    const text = '<iframe width="560" height="315" src="https://www.youtube.com/embed/HBGUpqz29KI?si=NskG11d_F5-sVG-I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'

    return (
        <div className="h-full flex mx-6">
            <div className="w-3/5 px-6 space-y-4">
                <div>
                    <p className="font-bold text-2xl">Share</p>
                    <p className="text-gray-500 text-sm">Customize how your assistant responds to questions</p>
                </div>


                <div className="text-[#2c2c2c] space-y-2 border p-4 text-sm">
                    <IoCodeSharp className="text-2xl font-bold" />

                    <p>{text}</p>
                </div>
            </div>

            <div className="w-2/5 flex justify-center items-center border rounded-xl">
                <RiMovieFill className="text-6xl text-[#2c2c2c]" />
            </div>
        </div>
    )
}

export default CustomTone;