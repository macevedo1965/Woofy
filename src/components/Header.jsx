"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex w-full h-20 bg-white px-4 md-px-8 lg:px-16 xl:px-32 2xl:px-64 items-center justify-between">
      <Link href="" className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/images/logo-woofy.png"
            alt="Woofy Logo"
            width={72}
            height={72}
            className="w-18 h-18 object-contain"
          />
          <span className="hidden md:block text-4xl text-orange-400 font-extrabold mt-3">
            Woofy
          </span>
        </div>
      </Link>
      <nav className="items-center gap-6 hidden md:flex">
        <Link
          href="/"
          className="text-lg text-orange-500 hover:text-orange-600 hover:underline underline-offset-6"
        >
          Inicio
        </Link>
        <Link
          href="/"
          className="text-lg text-orange-500 hover:text-orange-600 hover:underline underline-offset-6"
        >
          About
        </Link>
        <Link
          href="/"
          className="text-lg text-orange-500 hover:text-orange-600 hover:underline underline-offset-6"
        >
          Contact
        </Link>
      </nav>
      <div className="">
        <Menu />
      </div>
    </div>
  );
};

export default Header;
