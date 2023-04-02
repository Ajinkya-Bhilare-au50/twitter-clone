import React from "react";
import { PhotographIcon } from "@heroicons/react/outline";
import { EmojiHappyIcon } from "@heroicons/react/outline";
const Input = () => {
  return (
    <div className="flex border-b gray-200 p-2">
      <img
        className="block hover:brightness-95 cursor-pointer sm:mx-5 mx-auto  xl:mr-2 sm:h-[40px] sm:w-[40px] object-cover rounded-full xl:h-[40px] xl:w-[40px]"
        src="https://hairstylecamp.com/wp-content/uploads/men-square-face-hairstyle-2.jpg"
        alt="user-img"
      />
      <div className="flex flex-col flex-grow">
        <textarea
          className="flex-grow tracking-wide min-h-[50px] text-gray-700 p-1 border-none focus:ring-0 text-lg placeholder-gray-700"
          rows="2"
          placeholder="what's happening ?"
        ></textarea>

        <div className="flex justify-between border-t-2 pt-2.5">
          <div className=" flex">
            <PhotographIcon className="h-10 w-10  hoverEffect text-sky-500 p-2 hover:bg-sky-100" />
            <EmojiHappyIcon className="h-10 w-10 hoverEffect text-sky-500 p-2 hover:bg-sky-100" />
          </div>
          <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50 " >Tweet</button>
        </div>
      </div>
    </div>
  );
};

export default Input;
