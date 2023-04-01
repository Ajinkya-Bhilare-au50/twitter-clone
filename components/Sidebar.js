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
    <div>
      {/* twitterlogo */}
      <div className="hoverEffect">
        <Image
          width="50"
          height="50"
          src={
            "https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
          }
        ></Image>
      </div>
      {/* menu */}
      <div className="">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notification" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmark" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={DotsHorizontalIcon} />
      </div>
      {/* button */}
      <button>Tweet</button>
      {/* miniprofile */}
      <div className="hoverEffect">
        <img
          className="block mx-auto sm:mx-0 sm:h-[50px] sm:w-[50px] object-cover rounded-full xl:h-[100px] xl:w-[100px]"
          src="https://hairstylecamp.com/wp-content/uploads/men-square-face-hairstyle-2.jpg"
          alt="user-img"
        />
        <h4>Amit Patel</h4>
        <p>@coderSmart</p>
      </div>
      <DotsHorizontalIcon className="h-5"/>
    </div>
  );
}

export default Sidebar;
