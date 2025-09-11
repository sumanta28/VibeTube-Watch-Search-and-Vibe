const BASE_URL = "http://localhost:5000/api";

export const fetchVideos = async () => {
  const res = await fetch(`${BASE_URL}/videos`);
  const data = await res.json();
  return data;
};

// If you want search, add a similar backend endpoint and use:
export const fetchSearchVideos = async (query) => {
  const res = await fetch(`${BASE_URL}/search?q=${encodeURIComponent(query)}`);
  const data = await res.json();
  return data;
};