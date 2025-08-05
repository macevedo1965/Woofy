import Ad from "@/components/Ad";
import Birthdays from "@/components/RightMenu/Birthdays";
import FriendRequests from "@/components/RightMenu/FriendRequests";

const RightMenu = ({ userId }) => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
