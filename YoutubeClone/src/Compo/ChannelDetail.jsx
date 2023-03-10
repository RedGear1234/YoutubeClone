import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchfromApi } from "../utils/fetchfromApi";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchfromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchfromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:"linear-gradient(90deg, rgba(233,157,173,1) 0%, rgba(212,23,23,1) 50%, rgba(255,0,0,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: "100px" } }}>
            <Videos videos={videos} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
