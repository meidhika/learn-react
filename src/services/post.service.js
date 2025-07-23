import axios from "axios";

const API_BASE_URL = "https://be-devarsip.vercel.app/api";

export const getAllPosts = async ({ queryKey }) => {
  const [_key, keyword] = queryKey;

  const response = await axios.get(`${API_BASE_URL}/posts`, {
    params: keyword ? { q: keyword } : {},
  });

  return response.data.data;
};

export const createPost = async (newPost) => {
  const res = await axios.post(`${API_BASE_URL}/posts`, newPost);
  return res.data;
};
