import Link from "next/link";

const Signin: React.FC = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center space-y-6">
            <input
                type="email"
                placeholder="Email"
                className="bg-white text-[#1C1C1C] border py-2 px-4 w-full max-w-md rounded-xl text-sm hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-[#1C1C1C] shadow-md"
            />
            <input
                type="password"
                placeholder="Password"
                className="bg-white text-[#1C1C1C] border py-2 px-4 w-full max-w-md rounded-xl text-sm hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-[#1C1C1C] shadow-md"
            />

            <button className="bg-white border py-2 w-full max-w-md rounded-xl mt-5 flex justify-center items-center text-sm hover:bg-gray-200 hover:scale-105 duration-300 text-[#1C1C1C] shadow-md">
                Continue
            </button>

            <p className="font-normal text-sm">Don&apos;t have an account? <Link href="/signup" className="font-bold underline">Sign up here</Link>.</p>
        </div>
    )
}

export default Signin;