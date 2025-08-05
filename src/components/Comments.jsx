import Image from "next/image";

const Comments = () => {
  return (
    <div classname="">
      {/* WRITE NEW COMMENT */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/1586948/pexels-photo-1586948.jpeg"
          alt="Yorkie"
          width={32}
          height={32}
          className="object-cover w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-full text-sm px-2 py-2 w-full">
          <input
            type="text"
            placeholder="Escribe un comentario..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/assets/images/icons-woofy/emoji.png"
            alt="Emoji Icon"
            width={16}
            height={16}
            className="w-4 h-4 cursor-pointer"
          />
        </div>
      </div>

      {/* COMMENTS */}
      <div className="">
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR */}
          <div className="">
            <Image
              src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg"
              alt="User Avatar"
              width={40}
              height={40}
              className="w-10 h-10 object-cover rounded-full"
            />
          </div>
          {/* DESCRIPTION */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium text-orange-500">Bernice Spencer</span>
            <p className="text-sm text-neutral-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              reprehenderit voluptatum, harum quidem repellat temporibus sed
              fuga eaque quam. Deserunt culpa maxime fuga consectetur eligendi
              placeat eaque. Quod, delectus repudiandae.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-2 bg-slate-100 py-2 px-4 rounded-full">
                <Image
                  src="/assets/images/icons-woofy/like.png"
                  alt="Like Icon"
                  width={12}
                  height={12}
                  className="w-4 h-4 cursor-pointer"
                />
                <span className="text-gray-400">|</span>
                <span className="text-gray-400">123 Likes</span>
              </div>
              <div className="bg-slate-100 py-2 px-4 rounded-xl">Reply</div>
            </div>
          </div>
          {/* ICON */}
          <Image
            src="/assets/images/icons-woofy/more.png"
            alt="More Icon"
            width={16}
            height={16}
            className="w-4 h-4 cursor-pointer rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
