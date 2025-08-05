import posts from "@/data/posts";
import Post from "@/components/Post";

/* const posts = [
  {
    id: 1,
    title: "Post 1",
    content: "Contenido del post 1",
    media:
      "https://images.pexels.com/photos/27981924/pexels-photo-27981924.jpeg",
    mediaType: "image",
  },
  {
    id: 2,
    title: "Post 2",
    content: "Contenido del post 2",
    media: "/assets/videos/5728451-sd_426_240_24fps.mp4",
    mediaType: "video",
  },
]; */

const Feed = () => {
  return (
    <div className="flex flex-col p-4 bg-white rounded-lg shadow-md overflow-scroll scrollbar-hide text-sm mb-4 gap-16">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Feed;
