import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  if (!video?.snippet) return null;

  const { title, thumbnails, channelTitle } = video.snippet;
  const videoId = video.id?.videoId || video.id;

  return (
    <Card
      sx={{ width: 300, boxShadow: 3, cursor: "pointer" }}
      onClick={() => navigate(`/video/${videoId}`)}
    >
      <CardMedia
        component="img"
        height="180"
        image={thumbnails?.high?.url}
        alt={title}
      />
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold" noWrap>
          {title}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" noWrap>
          {channelTitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
