import React from "react";

export default function SidebarMenuItem({ text, Icon,active }) {
  return (
    <div className="hoverEffect flex items-center text-gray-700 sm:justify-center xl:justify-start space-x-3">
      <Icon className="h-7" />
      <span className={`${active && "font-bold"}`}>{text}</span>
    </div>
  );
}
