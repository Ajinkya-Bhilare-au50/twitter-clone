import { SparklesIcon } from "@heroicons/react/outline";
import React from "react";
import Input from "./Input";
import Post from "./Post";

function Feed() {
  const posts = [
    {
      id: "1",
      name: "Amit Patel",
      username: "codewithamit",
      userImg:
        "https://hairstylecamp.com/wp-content/uploads/men-square-face-hairstyle-2.jpg",
      img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "I ❤️ India",
      timestamps: "2 hours ago",
    },
    {
      id: "2",
      name: "Pranali Puntar",
      username: "pujapuntar",
      userImg:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW5zJTIwcHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      img: "https://images.pexels.com/photos/6774998/pexels-photo-6774998.jpeg?auto=compress&cs=tinysrgb&w=1600",
      text: "Nice View",
      timestamps: "2 days ago",
    },
    {
      id: "3",
      name: "John Doe",
      username: "johndoe",
      userImg:
        "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img: "https://images.pexels.com/photos/7319478/pexels-photo-7319478.jpeg?auto=compress&cs=tinysrgb&w=1600",
      text: "Beautiful scenery!",
      timestamps: "3 hours ago",
    },

    // Object 3
    {
      id: "4",
      name: "Samantha Smith",
      username: "samanthasmith",
      userImg:
        "https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img: "https://images.pexels.com/photos/4069292/pexels-photo-4069292.jpeg?auto=compress&cs=tinysrgb&w=1600",
      text: "Incredible sunset!",

      timestamps: "10 minutes ago",
    },
    {
      id: "18",
      name: "John Smith",
      username: "@jsmith",
      userImg:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img: "https://images.pexels.com/photos/3343253/pexels-photo-3343253.jpeg?auto=compress&cs=tinysrgb&w=1600",
      text: "Beautiful city skyline",
      timestamps: "3 days ago",
    },
    {
      id: "19",
      name: "Sophie Lee",
      username: "slee",
      userImg:
        "https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img: "https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=1600",
      text: "Famously delicious food",
      timestamps: "5 days ago",
    },
    {
      id: "20",
      name: "David Kim",
      username: "dkim",
      userImg: "https://randomuser.me/api/portraits/men/1.jpg",
      img: "https://images.pexels.com/photos/1600128/pexels-photo-1600128.jpeg?auto=compress&cs=tinysrgb&w=1600",
      text: "Exploring beautiful caves",
      timestamps: "1 week ago",
    },
    {
      id: "21",
      name: "Maria Lopez",
      username: "mlopez",
      userImg: "https://randomuser.me/api/portraits/women/12.jpg",
      img: "https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&w=1600",
      text: "Enjoying a hike in the mountains",
      timestamps: "2 weeks ago",
    },
  ];
  return (
    <div className="xl:ml-[370px] border-l border-r xl:min-w-[576px] sm:ml-[110px] flex-grow max-w-xl">
      <div className="flex justify-between py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200 items-center">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((t) => (
        <Post key={t.id} post={t} />
      ))}
    </div>
  );
}

export default Feed;
