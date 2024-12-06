export default function Home() {
  return (
    <div className="flex flex-col h-screen px-4">
      <nav className="text-black px-4 py-4 font-bold">
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
      </nav>

      <div className="flex flex-col flex-1">
        <p>Squawk</p>
      </div>
    </div>
  );
}
