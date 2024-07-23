import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import {
  changeSearchTerm,
  clearVideos,
} from "../features/youtube/youtubeSlice";
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  const handleSearch = () => {
    if (location.pathname !== "/search") navigate("/search");
    else {
      dispatch(clearVideos);
    }
  };

  return (
    <div className="flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky ">
      <div className="flex gap-8 items-center text-2xl ">
        <div>
          <GiHamburgerMenu />
        </div>
        <div className="flex gap-2 items-center justify-center ">
          <FaYoutube className="text-2xl text-red-600" />
          <span className="text-xl ">Youtube</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl ">
            <div>
              <input
                type="text "
                placeholder="search"
                className="w-96 bg-zinc-900 focus:outline-none border-none"
                value={searchTerm}
                onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
              />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl">
              <AiOutlineSearch />
            </button>
          </div>
        </form>
        <div className="text-xl p-3 bg-zinc-900 rounded-full  ">
          <FaMicrophone />
        </div>
      </div>
      <div className="flex gap-8 items-center text-xl ">
        <FaVideo />
        <div className="relative ">
          <BsBell />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1 ">
            9+
          </span>
        </div>
        <img
          src="https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png"
          alt="profile logo "
          className="w-9 h-9 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
