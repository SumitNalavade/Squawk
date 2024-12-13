const CustomTone: React.FC = () => {
    return (
        <div className="h-full flex mx-6">
            <div className="w-3/5 px-6 space-y-4">
                <div>
                    <p className="font-bold text-2xl">Custom Tone</p>
                    <p className="text-gray-500 text-sm">Customize how your assistant responds to questions</p>
                </div>


                <div className="text-[#2c2c2c] space-y-6">
                    <div>
                        <p className="font-bold">Name</p>

                        <input type="text" placeholder="Name your custom tone" className="border w-full p-2 rounded-xl" />
                    </div>

                    <div>
                        <p className="font-bold">Description</p>

                        <input type="text" placeholder="Describe what this tone does" className="border w-full p-2 rounded-xl" />
                    </div>

                    <div>
                        <p className="font-bold">Instructions</p>

                        <textarea rows={10} placeholder="This tone is a creative assistant that has a dreamy undertone..." className="border w-full p-2 rounded-xl" />
                    </div>

                    <button className="bg-[#2c2c2c] text-white px-6 py-2 rounded-md">
                        Create
                    </button>
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

export default CustomTone;