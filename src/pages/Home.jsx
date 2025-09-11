import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../features/videos/videosSlice";
import VideoCard from "../components/VideoCard";
import { Box, Typography, Grid } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(getVideos());
  }, [dispatch]);
  return (
    <Box sx={{ padding: "24px" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          fontFamily: "Segoe UI, Roboto, sans-serif",
          background: "linear-gradient(90deg, #ff416c, #ff4b2b)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          mt: 2,
          mb: 4,
        }}
      >
        🔥 Trending Videos
      </Typography>

      {status === "loading" && <Typography>Loading...</Typography>}
      {status === "failed" && <Typography>Error fetching videos</Typography>}

      <Grid container spacing={3} justifyContent="center">
        {Array.isArray(items) &&
          items.map((video) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={video.id.videoId || video.etag}
            >
              <VideoCard video={video} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Home;
