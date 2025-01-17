import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonsSign from "./ButtonsSign";

const Nav = () => {
  return (
    <nav className="w-full z-20 flex justify-center border-b border-b-foreground/10 h-24 bg-gray-950">
      <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
        <div className="flex gap-5 items-center font-semibold">
          <Link href="/">
            <Image height={65} width={65} src={"/codecollab.png"} alt="logo" />
          </Link>
          <p className="font-bold text-3xl font-mono text-cyan-500 sm:block hidden">
            <Link href="/">CodeCollab</Link>
          </p>
        </div>
        <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-cyan-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <ButtonsSign />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
