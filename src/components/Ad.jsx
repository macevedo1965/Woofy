import Image from "next/image";
import React from "react";

const Ad = ({ size = "sm" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-orange-600 font-semibold">Sponsored Ads</span>
        <Image
          src="/assets/images/icons-woofy/more.png"
          alt="More Icon"
          width={16}
          height={16}
          className="w-4 h-4 cursor-pointer"
        />
      </div>
      {/* BOTTOM */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-48" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/18684805/pexels-photo-18684805.jpeg"
            alt="Image Ads"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
            alt="User avatar"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-semibold text-orange-500">
            WoofyChef Lounge
          </span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quia?"
            : size === "md"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quia? Natus, quia?"
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quia? Natus, quia? Natus, quia?"}
        </p>
        <button className="bg-orange-500 text-white p-2 text-xs rounded-lg cursor-pointer hover:bg-orange-600">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Ad;
