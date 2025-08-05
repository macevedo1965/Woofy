import AddPost from "@/components/AddPost";
import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu/LeftMenu";
import RightMenu from "@/components/RightMenu/RightMenu";
import Stories from "@/components/Stories";

export default function Home() {
  return (
    <div className="flex w-full px-4 md-px-8 lg:px-16 xl:px-32 2xl:px-64 items-start justify-center bg-orange-50 gap-4">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu />
      </div>
      <div className="flex flex-col w-full lg:w-[70%] xl:w-[50%] gap-4">
        <Stories />
        <AddPost />
        <Feed />
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu />
      </div>
    </div>
  );
}
