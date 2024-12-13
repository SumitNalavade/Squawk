import { BiSupport, BiCheck, BiBriefcaseAlt, BiPlus } from "react-icons/bi";
import { PiHandWaving } from "react-icons/pi";
import { TbHorseToy } from "react-icons/tb";

const TonePage: React.FC = () => {
    return (
        <div className="h-full flex mx-6">
            <div className="w-3/5 px-6 space-y-4">
                <div>
                    <p className="font-bold text-2xl">Tone</p>
                    <p className="text-gray-500 text-sm">Customize how your agent responds to questions</p>
                </div>

                <div>
                    <button className="bg-[#2c2c2c] text-white px-6 py-2 rounded-lg w-full">
                        Upload
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-6 text-[#2c2c2c]">
                    <div className="p-4 space-y-2 border rounded-2xl cursor-pointer hover:bg-gray-200 bg-gray-200">
                        <div className="flex gap-x-2">
                            <BiSupport className="text-2xl" />

                            <p className="font-bold">Standard</p>
                        </div>

                        <p className="text-xs text-gray-400">Informal yet professional, factual and clear</p>
                    </div>

                    <div className="p-4 space-y-2 border rounded-2xl cursor-pointer hover:bg-gray-200">
                        <div className="flex gap-x-2">
                            <BiCheck className="text-2xl" />

                            <p className="font-bold">Matter-Of-Fact</p>
                        </div>

                        <p className="text-xs text-gray-400">Clear and honest, but never harsh</p>
                    </div>

                    <div className="p-4 border space-y-2 rounded-2xl cursor-pointer hover:bg-gray-200">
                        <div className="flex gap-x-2">
                            <BiBriefcaseAlt className="text-2xl" />

                            <p className="font-bold">Professional</p>
                        </div>

                        <p className="text-xs text-gray-400">Informative, respectful, yet empathetic</p>
                    </div>

                    <div className="p-4 space-y-2 border rounded-2xl cursor-pointer hover:bg-gray-200">
                        <div className="flex gap-x-2">
                            <PiHandWaving className="text-2xl" />

                            <p className="font-bold">Friendly</p>
                        </div>

                        <p className="text-xs text-gray-400">Enthusiastic, but not overly familiar</p>
                    </div>

                    <div className="p-4 border rounded-2xl cursor-pointer hover:bg-gray-200">
                        <div className="flex gap-x-2">
                            <TbHorseToy className="text-2xl" />

                            <p className="font-bold">Playful</p>
                        </div>

                        <p className="text-xs text-gray-400">Fun and friendly, without sarcasm or cringe</p>
                    </div>

                    <div className="p-4 border space-y-2 rounded-2xl cursor-pointer hover:bg-gray-200">
                        <div className="flex gap-x-2">
                            <BiPlus className="text-2xl" />

                            <p className="font-bold">Custom</p>
                        </div>

                        <p className="text-xs text-gray-400">Choose your own tone settings for your assistant</p>
                    </div>
                </div>

            </div>

            <div className="w-2/5 flex justify-center pt-12 h-full">
                <div className="bg-gradient-to-b from-[#F7E2FF] to-[#7EE9FF] w-full h-full rounded-t-3xl flex items-end justify-center px-8 pt-14 shadow-lg">
                    <div className="bg-white w-full h-full rounded-t-3xl p-6 space-y-6 text-sm">
                        <p>Hey there! I’m more than happy to assist you 💪.</p>

                        <p>Your appointment for Dr. Robinson is set for next week on June 18th at 11:00 AM 👨‍⚕.</p>

                        <p>If you need to reschedule, update any details or if there is anything specific you’d like the doctor to know before your visit just let me know.</p>

                        <p>I’m here to make things as smooth as possible for you so don’t hesitate to reach out!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TonePage;