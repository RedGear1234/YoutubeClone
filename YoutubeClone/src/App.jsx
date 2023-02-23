import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import ChannelDetail from "./Compo/ChannelDetail";
import VideoDetail from "./Compo/VideoDetail";
import SearchFeed from "./Compo/SearchFeed";
import Navbar from "./Compo/Navbar";
import Feed from "./Compo/Feed"

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />}></Route>
          <Route path="/video/:id" element={<VideoDetail />}></Route>
          <Route path="/channel/:id" element={<ChannelDetail />}></Route>
          <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
