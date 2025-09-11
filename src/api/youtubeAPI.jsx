const API_KEY = "AIzaSyD3mec4pBZ-56jCu2b_U9eGnnkGka9H3vk";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const fetchVideos = async () => {
  const res = await fetch(
    `${BASE_URL}/videos?part=snippet,contentDetails&chart=mostPopular&regionCode=IN&maxResults=50&key=${API_KEY}`
  );
  const data = await res.json();
  return data.items;
};

export const fetchSearchVideos = async (query) => {
  const res = await fetch(
    `${BASE_URL}/search?part=snippet&q=${query}&key=${API_KEY}&maxResults=20&type=video`
  );
  const data = await res.json();
  return data.items;
};
