import Link from "next/link";

const Signup: React.FC = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center space-y-6">
            <input
                type="text"
                placeholder="Name"
                className="bg-white text-[#1C1C1C] border py-2 px-4 w-full max-w-md rounded-lg text-sm hover:scale-105 duration-300 focus:outline-none"
            />

            <input
                type="email"
                placeholder="Email"
                className="bg-white text-[#1C1C1C] border py-2 px-4 w-full max-w-md rounded-lg text-sm hover:scale-105 duration-300 focus:outline-none"
            />
            <input
                type="password"
                placeholder="Password"
                className="bg-white text-[#1C1C1C] border py-2 px-4 w-full max-w-md rounded-lg text-sm hover:scale-105 duration-300 focus:outline-none"
            />

            <button className="bg-white border py-2 w-full max-w-md rounded-lg mt-5 flex justify-center items-center text-sm hover:bg-gray-200 hover:scale-105 duration-300 text-gray-500">
                Continue
            </button>

            <p className="font-normal text-sm">Already have an account? <Link href="/signin" className="font-bold underline">Sign in here</Link>.</p>
        </div>
    )
}

export default Signup;