import React from "react";
import { FaHome, FaHistory } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { SlLike } from "react-icons/sl";

const SideNav = () => {
  const mainLink = [
    {
      icons: <FaHome className="text-xl" />,
      name: "Home",
    },
    {
      icons: <SiYoutubeshorts className="text-xl" />,
      name: "Shorts",
    },
    {
      icons: <MdSubscriptions className="text-xl" />,
      name: "Subscription",
    },
  ];

  const otherLinks = [
    {
      icons: <FaHistory className="text-xl" />,
      name: "History",
    },
    {
      icons: <MdOutlineVideoLibrary className="text-xl" />,
      name: "Library",
    },
    {
      icons: <MdWatchLater className="text-xl" />,
      name: "Watch Later",
    },
    {
      icons: <SlLike className="text-xl" />,
      name: "Liked Video",
    },
  ];

  return (
    <div className="w-2/12 bg-[#212121] p-2 pr-5 overflow-auto pb-8 ml-2 h-screen">
      <ul className="flex flex-col border-b-2 border-gray-800">
        {mainLink.map(({ icons, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-zinc-600 ${
                name === "Home" ? "bg-slate-600" : ""
              } rounded-xl`}
            >
              <a href="#" className="flex items-center gap-5">
                {icons}

                <span className="text-sm tracking-wider  ">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-1 border-gray-800">
        {otherLinks.map(({ icons, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-zinc-600 ${
                name === "Home" ? "bg-slate-600" : ""
              }rounded-xl`}
            >
              <a href="#" className="flex items-center gap-5">
                {icons}

                <span className="text-sm tracking-wider  ">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideNav;
