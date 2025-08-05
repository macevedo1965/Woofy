import Image from "next/image";
import Link from "next/link";
import React from "react";

const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-orange-600 font-semibold">Birthdays</span>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/9979671/pexels-photo-9979671.jpeg"
            alt="User avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold text-orange-500">Pepe José</span>
        </div>
        <div className="">
          <button className="bg-orange-500 text-white text-xs px-2 py-1 rounded-md hover:bg-orange-600">
            Celebrar
          </button>
        </div>
      </div>
      {/* UPCOMING */}
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <Image
          src="/assets/images/icons-woofy/gift.png"
          alt="Gift Icon"
          width={24}
          height={24}
          className="w-6 h-6 object-cover"
        />
        <Link href="/" className="flex flex-col gap-1 text-xs">
          <span className="text-gray-700 font-semibold">
            Upcoming Birthdays
          </span>
          <span className="text-gray-500">
            See other 16 have upcoming birthdays
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
