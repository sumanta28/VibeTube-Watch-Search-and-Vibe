import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingShorts } from "../features/shorts/shortsSlice";
import { Box, Typography, Card, CardContent } from "@mui/material";

const Shorts = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.shorts);

  useEffect(() => {
    dispatch(getTrendingShorts());
  }, [dispatch]);

  useEffect(() => {
    console.log("Shorts fetched: ", items);
  }, [items]);

  return (
    <Box
      sx={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        backgroundColor: "#000",
        p: 2,
      }}
    >
      {status === "loading" ? (
        <Typography color="white">Loading Shorts...</Typography>
      ) : (
        items.map((video, index) => {
          const { title, channelTitle } = video.snippet;
          const videoId = video.id;

          return (
            <Card
              key={index}
              sx={{
                height: "90vh",
                mb: 3,
                scrollSnapAlign: "start",
                position: "relative",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  height: "100%",
                  width: "100%",
                  border: 0,
                }}
              />
              <CardContent
                sx={{
                  position: "absolute",
                  bottom: 0,
                  background: "rgba(0, 0, 0, 0.5)",
                  width: "100%",
                  color: "#fff",
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  {title}
                </Typography>
                <Typography variant="subtitle2">{channelTitle}</Typography>
              </CardContent>
            </Card>
          );
        })
      )}
    </Box>
  );
};

export default Shorts;



