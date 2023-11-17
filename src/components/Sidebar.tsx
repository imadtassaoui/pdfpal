import Image from "next/image";
import { FC } from "react";

import sparkles from "@/assets/icons/sparkles.svg";
import plus from "@/assets/icons/plus.svg";
import user from "@/assets/user.png";
import logout from "@/assets/icons/log-out.svg";

import DashboardButton from "./ui/DashboardButton";
import FileCard from "./ui/FileCard";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <aside className="relative w-[243px] h-full bg-neutral-50 border-r z-10 border-neutral-200 flex flex-col justify-between">
      <section className="w-full  overflow-hidden h-full bg-neutral-50 flex flex-col gap-4 p-4">
        <DashboardButton label="New file">
          <Image src={plus} alt="sparkles-icon" />
        </DashboardButton>
        <div className="flex flex-col gap-2 w-full h-full">
          <label className="text-neutral-500 text-xs font-bold">My files</label>
          <div className="w-full max-h-full flex-1 shrink flex flex-col gap-2 overflow-y-scroll">
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard /> <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard /> <FileCard />
            <FileCard />
            <FileCard />
            <FileCard /> <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard /> <FileCard />
            <FileCard />
            <FileCard /> <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard /> <FileCard />
            <FileCard />
            <FileCard />
            <FileCard /> <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
            <FileCard />
          </div>
        </div>
      </section>
      <section className="w-full  h-fit end-0 bg-neutral-50 p-4 flex flex-col gap-1 border-t border-neutral-200">
        <DashboardButton label="Upgrade">
          <Image src={sparkles} alt="sparkles-icon" />
        </DashboardButton>
        <button className="p-3 w-full hover:bg-neutral-100 font-medium flex gap-2 rounded-xl items-center justify-between cursor-pointer">
          <div className="flex gap-2">
            <Image src={user} alt="user" width={24} height={24} />
            <label>Imad Tassaoui</label>
          </div>
          <Image src={logout} alt="logout-icon" />
        </button>
      </section>
      {/* <div className="bg-black w-screen h-screen absolute top-0 left-0 -z-10" /> */}
    </aside>
  );
};

export default Sidebar;
