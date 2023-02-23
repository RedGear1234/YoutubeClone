import React from "react";
import { Stack, Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={2}
      marginTop="30px"
    >
      {videos.map((item, index) => {
        return (
          <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
