import { Check, CircleCheckBig, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-orange-600 font-semibold">Friend Requests</span>
        <Link href="/" className="text-orange-500 text-xs">
          See all
        </Link>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/1084165/pexels-photo-1084165.jpeg"
            alt="User avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold text-orange-500">Roberto Carlos</span>
        </div>
        <div className="flex gap-3 justify-end">
          <div className="aspect-square w-5 h-5">
            <Check className="w-5 h-5 cursor-pointer bg-orange-500 text-white rounded-full" />
          </div>
          <div className="aspect-square w-5 h-5">
            <X className="w-5 h-5 cursor-pointer bg-orange-300 text-white rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
