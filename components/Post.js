import React from "react";
import { DotsHorizontalIcon, ChatIcon } from "@heroicons/react/outline";
import {
  TrashIcon,
  HeartIcon,
  ShareIcon,
  ChartBarIcon,
} from "@heroicons/react/outline";
function Post({ post }) {
  return (
    <div className="flex p-3 space-x-2 cursor-pointer border-b border-gray-200">
      {/* user image */}
      <div className="mr-2">
        <img
          src={post.userImg}
          alt="userimage"
          className="block hover:brightness-95 cursor-pointer sm:mx-5 mx-auto  xl:mr-2 sm:h-[40px] sm:w-[40px] object-cover rounded-full xl:h-[40px] xl:w-[40px]"
        />
      </div>
      {/* main div */}
      <div className="flex flex-col w-full">
        {/* div1 */}
        <div className="flex justify-between whitespace-nowrap">
          {/* task1 */}
          <div className="flex gap-2 items-center">
            <h4 className="font-bold text-[15px] sm:text-[17px] hover:underline">
              {post.name}
            </h4>
            <span className="text-sm ">@{post.username} -</span>
            <span className="text-sm hover:underline">{post.timestamps}</span>
          </div>
          {/* task2 */}
          <div className="">
            <DotsHorizontalIcon className="h-7" />
          </div>
        </div>
        {/* div2 */}
        <div className="text-gray-700 mb-1">{post.text}</div>
        {/* div3 */}
        <div className="mt-2">
          <img className="rounded-2xl " src={post.img} alt="" />
        </div>
        {/* div4 */}
        <div className="flex justify-evenly p-3 text-gray-500">
          <div className="">
            <ChatIcon className="h-7 hoverEffect  p-1 hover:bg-blue-100 hover:text-blue-500" />
          </div>
          <div className="">
            <TrashIcon className="h-7 hoverEffect p-1 hover:bg-blue-100 hover:text-blue-500" />
          </div>
          <div className="">
            <HeartIcon className="h-7 hoverEffect p-1 hover:bg-red-100 hover:text-red-500" />
          </div>
          <div className="">
            <ShareIcon className="h-7 hoverEffect p-1 hover:bg-blue-100 hover:text-blue-500" />
          </div>
          <div className="">
            <ChartBarIcon className="h-6 hoverEffect p-1 hover:bg-blue-100 hover:text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
