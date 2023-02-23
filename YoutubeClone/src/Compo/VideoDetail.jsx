import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle, CheckCircleSharp } from "@mui/icons-material";
import { fetchfromApi } from "../utils/fetchfromApi";
import Videos from "./Videos"

const VideoDetail = () => {
  const { id } = useParams();
  const [Detail, setDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchfromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setDetail(data.items[0])
    )
        fetchfromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) =>
        setVideos(data.items)
        );
  }, [id]);


   if(!Detail?.snippet) return 'Loading...'


  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = Detail;


  return (
    <>
      <Box minHeight="95vh">
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box flex={1}>
            <Box sx={{ width: "100%", postion: "sticky", top: "86px" }}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
              />
              <Typography
                color="#FFF"
                variant="h5"
                fontWeight="bold"
                sx={{ ml: "20px", mt: "20px" }}
              >
                {title}
              </Typography>
              <Stack
                direaction="row"
                justifyContent="space-between"
                sx={{ color: "#fff", ml: "20px", mt: "20px" }}
                py={1}
                px={2}
              >
                <Link to={`/channel/${channelId}`}>
                  <Typography
                    variant={{ sm: "subtitle1", md: "h6" }}
                    color="#fff"
                  >
                    {channelTitle}
                    <CheckCircle
                      sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                    />
                  </Typography>
                </Link>
                <Stack direaction="row" gap="20px">
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(viewCount).toLocaleString()} Views
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(likeCount).toLocaleString()} Likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box
            px={2}
            py={{ md: 1, xs: 5 }}
            justifyContent="center"
            alignItems="center"
          >
            <Videos videos={videos} direction="column" />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default VideoDetail;
