import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const VideoDetail = () => {
  const { id } = useParams();

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ position: "relative", paddingTop: "56.25%", mb: 2 }}>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <Typography variant="h6" fontWeight="bold">
        Video ID: {id}
      </Typography>
    </Box>
  );
};

export default VideoDetail;
