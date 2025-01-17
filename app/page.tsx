import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="bg-code h-[50rem] z-10 -mt-2 w-full bg-center">
        <p className="text-center text-6xl text-cyan-500 font-extrabold font-mono mt-60">
          CodeCollab
        </p>
        <p className="text-lg text-cyan-100 text-center font-mono font-bold mt-7 mx-10">
          Connect, collaborate, and showcase your code live with developers
          worldwide on CodeCollab!
        </p>
        <div className="flex justify-center items-center mt-20">
          <button className="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-cyan-800">
            <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <Link href={"/sign-in"}>Sign in</Link>
            </span>
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-t from-gray-950 to-black w-full py-24 border-b-2 border-cyan-500">
        <div className="text-center ">
          <p className="text-lg text-teal-200 font-mono mb-5">About</p>
          <h1 className="text-teal-50 font-mono text-xl md:text-2xl lg:text-4xl mb-10 mx-16">
            Connect, Collaborate, and Showcase with Developers Worldwide
          </h1>
          <p className="md:visible invisible font-mono text-gray-300 text-xs lg:text-lg tracking-wide md:text-base mx-10">
            Join a thriving community of developers to chat, share ideas, and
            display your projects. <br />
            Explore collaboration opportunities and elevate your skills, all in
            one dynamic platform!
          </p>
        </div>
      </div>
    </>
  );
}
