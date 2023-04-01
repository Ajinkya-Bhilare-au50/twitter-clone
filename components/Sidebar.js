import Image from "next/image";
import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardIcon,
  UserIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 fixed h-full gap-2">
      {/* twitterlogo */}
      <div className="w-14">
        <div className="hoverEffect p-2 rounded-full  hover:bg-blue-100">
          <Image
            width="55"
            height="55"
            src={
              "https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
            }
          ></Image>
        </div>
      </div>
      {/* menu */}
      <div className="mb-3">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notification" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmark" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={DotsHorizontalIcon} />
      </div>
      {/* button */}
      <button className="bg-blue-400 text-white rounded-full w-58 h-12 md:h-12 font-bold shadow-md hover:brightness-90 xl:text-xl p-2 hidden xl:inline">
        Tweet
      </button>
      {/* miniprofile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start">
        <img
          className="block mx-auto sm:mx-0 xl:mr-2 sm:h-[50px] sm:w-[50px] object-cover rounded-full xl:h-[40px] xl:w-[40px]"
          src="https://hairstylecamp.com/wp-content/uploads/men-square-face-hairstyle-2.jpg"
          alt="user-img"
        />
        <div className="leading-5">
          <h4 className="font-bold">Amit Patel</h4>
          <p className="text-gray-500 text-xs"> @coderSmart</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8" />
      </div>
    </div>
  );
}

export default Sidebar;
