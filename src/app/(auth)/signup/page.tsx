const Signup: React.FC = () => {
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
        </div>
    )
}

export default Signup;