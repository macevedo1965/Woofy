"use client";

import Image from "next/image";
import Comments from "@/components/Comments";

const Post = ({ post }) => {
  return (
    <div className="flex flex-col w-full gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/1586948/pexels-photo-1586948.jpeg"
            alt="Yorkie"
            width={48}
            height={48}
            className="object-cover w-12 h-12 rounded-full"
          />
          <span className="font-bold text-orange-500">User</span>
        </div>
        <Image
          src="/assets/images/icons-woofy/more.png"
          alt="More Icon"
          width={16}
          height={16}
          className="w-4 h-4 cursor-pointer"
        />
      </div>
      {/* POST DESCRIPTION */}
      <div className="flex flex-col gap-4">
        {post.mediaType === "image" ? (
          <div className="w-full min-h-96 relative">
            <Image
              src={post.media}
              alt="Post Image/Video"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ) : (
          <div className="w-full min-h-48 relative">
            <video
              src={post.media}
              alt="Post Image/Video"
              className="flex items-center justify-center object-fill rounded-lg"
              controls
              autoPlay
              loop
              muted
            />
          </div>
        )}
        <p className="text-sm text-neutral-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          libero illo sed reprehenderit corporis laborum quis cumque officia
          unde laudantium dolor ut cum possimus, ex vel atque dolores nobis
          odit.
        </p>
      </div>
      {/* INTERACTIONS */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 bg-slate-100 py-2 px-4 rounded-full">
            <Image
              src="/assets/images/icons-woofy/like.png"
              alt="Like Icon"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-400">|</span>
            <span className="text-gray-400">
              123<span className="hidden md:inline text-gray-500"> Likes</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-100 py-2 px-4 rounded-full">
            <Image
              src="/assets/images/icons-woofy/comment.png"
              alt="Comment Icon"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-400">|</span>
            <span className="text-gray-400">
              123<span className="hidden md:inline text-gray-500"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      {/* COMMENTS */}
      <Comments />
    </div>
  );
};

export default Post;
