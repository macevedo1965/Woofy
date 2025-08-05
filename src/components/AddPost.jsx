"use client";

import { useState } from "react";
import Image from "next/image";
import AddPostButton from "./AddPostButton";

const AddPost = () => {
  const [postPostDescription, setPostDescription] = useState("");

  return (
    <div className="p-4 bg-white flex gap-4 justify-between text-sm rounded-lg shadow-md">
      {/* AVATAR */}
      <Image
        src="https://images.pexels.com/photos/29024647/pexels-photo-29024647.jpeg"
        alt="Storie's images/videos"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <form action={(data) => console.log(data)} className="flex gap-4">
          <textarea
            name="post-description"
            placeholder="¿Qué estás haciendo?"
            className="flex-1 bg-slate-100 rounded-lg p-1 focus:border-2 focus:bg-orange-100 focus:border-orange-500 border-0 focus:outline-none"
            onChange={(e) => setPostDescription(e.target.value)}
          ></textarea>
          {/*           <div className="flex">
            <Image
              src="/assets/images/icons-woofy/emoji.png"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
          </div> */}
          <AddPostButton />
        </form>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-2 text-orange-600 flex-wrap">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => console.log("Subiendo archivo...")}
          >
            <Image
              src="/assets/images/icons-woofy/addImage.png"
              alt="Photo Icon"
              width={20}
              height={20}
            />
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => console.log("Subiendo Video...")}
          >
            <Image
              src="/assets/images/icons-woofy/addVideo.png"
              alt="Video Icon"
              width={20}
              height={20}
            />
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => console.log("Subiendo Evento...")}
          >
            <Image
              src="/assets/images/icons-woofy/addEvent.png"
              alt="Photo Icon"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
