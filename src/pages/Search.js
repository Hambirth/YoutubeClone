import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";

import Spinner from "../components/Spinner";
import InfiniteScroll from "react-infinite-scroller";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { clearVideos } from "../features/youtube/youtubeSlice";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  useEffect(() => {
    dispatch(clearVideos());
    if (searchTerm === "") navigate("/");
    else {
      dispatch(getSearchPageVideos(false));
    }
  }, [dispatch, navigate, searchTerm]);
  return (
    <div className="max-h-screen overflow-auto">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <SideNav />
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getSearchPageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={650}
          >
            <div className="grid gap-y-10 gap-x-8 grid-cols-5 p-8">
              {videos.map((item) => {
                return <Card data={item} key={item.videoId} />;
              })}
            </div>
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Search;
