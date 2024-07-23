import axios from "axios";
import React from "react";
import parseVideoDuration from "./parseVideoDuration";
import converRawintoString from "./converRawintoString";
import timeSince from "./timeSince";

const API_KEY = process.env.React_APP_YOUTUBE_API_KEY;

export const parseData = async (items) => {
  try {
    const videosIds = [];
    const channelIds = [];

    items.forEach((items) => {
      channelIds.push(items.snippet.channelId);
      videosIds.push(items.id.videoId);
    });

    const {
      data: { items: channelData },
    } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds.join(
        ","
      )}&key=${API_KEY}`
    );

    const parsedChannelsData = [];
    channelData.forEach((channel) =>
      parsedChannelsData.push({
        id: channel.id,
        image: channel.snippet.thumbnails.default.url,
      })
    );

    const {
      data: { items: videosData },
    } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videosIds.join(
        ","
      )}&key=${API_KEY}`
    );

    const parseData = [];

    items.forEach((items, index) => {
      const { image: channelImage } = parsedChannelsData.find(
        (data) => data.id === items.snippet.channelId
      );
      if (channelImage) {
        parseData.push({
          videoId: items.id.videoId,
          videoTitle: items.snippet.title,
          videoDescription: items.snippet.description,
          videoThumbnail: items.snippet.thumbnails.medium.url,
          videoLink: `https://www.youtube.com/watch?v=${items.id.videoId}`,
          videoDuration: parseVideoDuration(
            videosData[index].contentDetails.duration
          ),
          videosViews: converRawintoString(
            videosData[index].statistics.viewCount
          ),
          videoAge: timeSince(new Date(items.snippet.publishedAt)),
          channelInfo: {
            id: items.snippet.channelId,
            image: channelImage,
            name: items.snippet.channelTitle,
          },
        });
      }
    });
    return parseData;
  } catch (error) {
    console.log(error);
  }
  return (
    <div>
      <h2>Hi</h2>
    </div>
  );
};
