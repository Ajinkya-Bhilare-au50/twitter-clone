import { SparklesIcon } from "@heroicons/react/outline";
import React from "react";
import Input from "./Input";

function Feed() {
  return (
    <div className="xl:ml-[370px] border-l border-r xl:min-w-[576px] sm:ml-[110px] flex-grow max-w-xl">
      <div className="flex justify-between py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200 items-center">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect">
          <SparklesIcon className="h-5" />
        </div>
          </div>
          <Input/>
    </div>
  );
}

export default Feed;
