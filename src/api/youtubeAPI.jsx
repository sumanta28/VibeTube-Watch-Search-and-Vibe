const YOUTUBE_API_KEY = "AIzaSyBTm63nkqm1T65BjNivqRnCqZwBgpLe938";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

// Fetch trending/popular videos or from a specific channel
export const fetchVideos = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/search?part=snippet&maxResults=20&q=cricket&type=video&key=${YOUTUBE_API_KEY}`
    );
    const data = await res.json();
    return data.items; // data.items has all video info
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};

// Search videos with a query
export const fetchSearchVideos = async (query) => {
  try {
    const res = await fetch(
      `${BASE_URL}/search?part=snippet&maxResults=20&q=${encodeURIComponent(
        query
      )}&type=video&key=${YOUTUBE_API_KEY}`
    );
    const data = await res.json();
    return data.items;
  } catch (error) {
    console.error("Error searching videos:", error);
    return [];
  }
};
