import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <div className="container align-self mx-auto h-screen flex flex-col flex-1 gap-y-20">
        <div className="flex items-center pt-20 font-bold">
          
          { /* Hero */ }
          <div className="w-full space-y-2">
            <h1 className="text-6xl text-center leading-tight text-[#2c2c2c]">Add AI Chat To Your Website In Minutes</h1>

            <div className="text-gray-500">
              <p className="text-center">Create custom AI agents trained on your content.</p>
              <p className="text-center">Add them to your site. No coding required.</p>
            </div>

            <div className="flex justify-center gap-x-4 pt-6">
              <button className="border border-stone-200 text-gray-500 px-10 py-2 rounded-md hover:bg-gray-50">
                View Demo
              </button>

              <Link href="/signup" className="bg-[#2c2c2c] text-white px-10 py-2 rounded-md">
                Get Started
              </Link>
            </div>
          </div>

          { /* Notion Sketch */ }
          <div className="w-full flex justify-center items-center">
            <Image
              src="/landing_page_sketch.png"
              alt="landing page sketch"
              width={500}
              height={300}
            />
          </div>
        </div>

        { /* Landing Page Demo */ }
        <div className="w-full flex justify-center items-center">
          <Image
            src="/landing_page_demo.png"
            alt="landing page demo"
            width={1500}
            height={300}
          />
        </div>

        { /* Conversationability Demo */ }
        <div className="w-full space-y-6 font-bold pt-24">
          <div className='space-y-2'>
            <div className='text-[#2c2c2c]'>
              <h2 className="text-5xl">Turn Your Content Into</h2>
              <h2 className="text-5xl">Conversations</h2>              
            </div>

            <div className="text-gray-500">
              <p>Upload your own documents, videos and images to create agents powered by your knowledge.</p>
              <p>We support a wide variety of formats including documents, videos and images.</p>
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <Image
              src="/landing_page_roadmap.png"
              alt="landing page roadmap"
              width={1500}
              height={300}
            />
          </div>
        </div>


        { /* Human like conversation demo */ }
        <div className="w-full space-y-6 font-bold pt-24">
          <div className='space-y-2'>
            <h2 className="text-5xl text-[#2c2c2c]">Natural Conversations</h2>

            <div className="text-gray-500">
              <p>Deliver engaging, human-like interactions with AI-powered assistants that</p>
              <p>understand context and respond naturally to your users&apos; needs.</p>
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <Image
              src="/landing_page_knowledge.png"
              alt="landing page knowledge"
              width={1500}
              height={300}
            />
          </div>
        </div>

      { /* Integration demo */ }
        <div className="w-full space-y-6 font-bold pt-24">
          <div className='space-y-2'>
            <h2 className="text-5xl text-[#2c2c2c]">Effortless Integration</h2>

            <div className="text-gray-500">
              <p>Seamlessly add your AI assistant to your website or platform with just</p>
              <p>a simple link or code—no technical experience required.</p>
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <Image
              src="/landing_page_brainstorm.png"
              alt="landing page brainstorm"
              width={1500}
              height={300}
            />
          </div>
        </div>

        { /* Security demo */ }
        <div className="w-full space-y-6 font-bold pt-24">
          <div className='space-y-2'>
            <h2 className="text-5xl text-[#2c2c2c]">Secure By Design</h2>

            <div className="text-gray-500">
              <p>Keep your data safe with built-in security features that prioritize privacy</p>
              <p>and safeguard your content and user interactions every step of the way.</p>
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <Image
              src="/landing_page_template.png"
              alt="landing page template"
              width={1500}
              height={300}
            />
          </div>
        </div>

        { /* How it works */ }
        <div className="w-full space-y-6 font-bold pt-24 mb-20">
          <div className='space-y-2'>
            <h2 className="text-5xl text-center text-[#2c2c2c]">How It Works</h2>

            <div className="text-gray-500 text-center">
              <p>We do the heavy lifting so you don&apos;t have to.</p>
            </div>
          </div>

          <div className='flex justify-around'>
            <div className='flex flex-col justify-center items-center gap-y-2'>
              <div className="text-gray-500">
                <Image
                  src="/how_it_works_placeholder.png"
                  alt="how it works placeholder"
                  width={400}
                  height={300}
                />
              </div>

              <div className='text-center space-y-2'>
                <p className='text-xl text-[#2c2c2c]'>Upload Your Content</p>
                <div className="text-gray-500 text-sm">
                  <p>Simply upload your documents, FAQs, or knowledge base.</p>
                  <p>We’ll process and organize everything for you automatically.</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-center items-center gap-y-2'>
              <div className="text-gray-500">
                <Image
                  src="/how_it_works_placeholder.png"
                  alt="how it works placeholder"
                  width={400}
                  height={300}
                />
              </div>

              <div className='text-center space-y-2'>
                <p className='text-xl text-[#2c2c2c]'>Let Us Build Your Agent</p>
                <div className="text-gray-500 text-sm">
                  <p>We processes your content and build a smart assistant</p>
                  <p>that can answer questions accurately and naturally.</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-center items-center gap-y-2'>
              <div className="text-gray-500">
                <Image
                  src="/how_it_works_placeholder.png"
                  alt="how it works placeholder"
                  width={400}
                  height={300}
                />
              </div>

              <div className='text-center space-y-2'>
                <p className='text-xl text-[#2c2c2c]'>Add It To Your Site</p>
                <div className="text-gray-500 text-sm">
                  <p>Copy a simple link and place it on your website.</p>
                  <p>Your assistant is live and ready to help—no coding required!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        { /* Use cases */ }
        <div className="w-full space-y-6 space-x-6 font-bold flex">
          <div className='w-full flex flex-col '>
            <div className='h-80 flex flex-col pt-20'>
              <h2 className="text-5xl w-full text-[#2c2c2c]">Solutions For Every Need</h2>
            </div>

            <div className='h-full'>
              <div className='bg-gray-200 py-4 px-2'>
                <p>Customer Service</p>
                <div className="text-gray-500 text-sm">
                  <p>Provide instant support to your customers with AI assistants that can answer FAQs, resolve common issues, and enhance user satisfaction 24/7.</p>
                </div>
              </div>

              <div className='py-4 px-2 hover:bg-gray-200 hover:cursor-pointer'>
                <p>Education</p>
                <div className="text-gray-500 text-sm">
                  <p>Create virtual teaching assistants to help students access course materials, answer questions, and stay engaged, anytime and anywhere.</p>
                </div>
              </div>

              <div className='py-4 px-2 hover:bg-gray-200 hover:cursor-pointer'>
                <p>Healthcare</p>
                <div className="text-gray-500 text-sm">
                  <p>Assist patients with scheduling, FAQs, and essential information about services, freeing up valuable time for your staff.</p>
                </div>
              </div>

              <div className='py-4 px-2 hover:bg-gray-200 hover:cursor-pointer'>
                <p>Small Businesses</p>
                <div className="text-gray-500 text-sm">
                  <p>Save time and resources by automating routine inquiries, showcasing product details, and guiding customers through purchases effortlessly.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <Image
              src="/landing_page_phone.png"
              alt="landing page phone"
              width={400}
              height={500}
            />
          </div>
        </div>

        { /* Call to action */ }
        <div className="w-full space-y-6 font-bold pt-24 mb-20 flex flex-col justify-center items-center">
          <div className='space-y-2'>
            <h2 className="text-6xl text-center text-[#2c2c2c]">Work Smarter, Not Harder</h2>

            <div className="text-gray-500 text-center">
              <p>Start creating smart AI agents to captivate visitors, answer questions and boost engagement.</p>
            </div>
          </div>

          <Link href={"/signup"} className="bg-[#2c2c2c] text-white px-8 py-2 rounded-md">
            Get Started For Free Now - No Coding Required!
          </Link>
        </div>
      </div>
    </div>
  );
}
