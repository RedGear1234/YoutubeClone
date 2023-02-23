import React from "react";
import { Typography, Box, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "350px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            color: "#FFF",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "100px",
              width: "100px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              ml: 2,
            }}
          >
            {channelDetail?.snippet?.title}
            <CheckCircle
              sx={{ fontSize: 14, color: "gray", mt: "5px", ml: "5px" }}
            />
          </Typography>

          {channelDetail?.statistics?.subscriberCount && (
            <Typography
              sx={{
                mt: 1,
              }}
            >
              {parseInt(
                channelDetail?.statistics.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
