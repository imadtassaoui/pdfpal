import Sidebar from "@/components/Sidebar";
import ChatBox from "@/components/chat/ChatBox";
import Reader from "@/components/reader/Reader";

export default function Dashboard() {
  return (
    <div className="h-full w-full flex">
      <Sidebar />
      <div className="flex h-full w-full md:flex-col lg:flex-row">
        <Reader />
        <ChatBox />
      </div>
    </div>
  );
}
