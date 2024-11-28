import axios from "axios";

const BASE_URL = "http://localhost/3000";

//axios setings
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

//Fetch API

export const fetchPostsByFetch = async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`HTTP error!${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fethching data`, error);
    throw error;
  }
};

export const createPostByFetch = async (newPost) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });
  if (!response.ok) {
    throw new Error(`Failed to create a post ${response.status}`);
  }
  return response.json();
};

export const updatePostByFetch = async (updatedPost, id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPost),
  });
  if (!response.ok) {
    throw new Error(`Failed to update post id: ${id},${response.status}`);
  }
  return response.json();
};

export const deletePostByFetch = async (postId) => {
  const response = await fetch(`${BASE_URL}/${postId}`, { method: "DELETE" });
  if (!response.ok) {
    throw new Error(`Failed to delete post ${postId}`);
  }
  return response.status === 204 || {};
};

//AXIOS
export const fetchPost = async () => {
  try {
    const response = await apiClient.get("/");
    return response.data;
  } catch (error) {
    console.error("Error fetching", error);
    throw error;
  }
};

export const createPost = async (newPost) => {
  try {
    const response = await apiClient.post("/", newPost);
    return response.data;
  } catch (error) {
    console.error("Error creating post", error);
    throw error;
  }
};

export const updatePost = async (id, updatedPost) => {
  try {
    const response = await apiClient.put(`/${id}`, updatedPost);
    return response.data;
  } catch (error) {
    console.error(`Failed to delete post ${id}`, error);
    throw error;
  }
};

export const deletePost = async (id) => {
  try {
    const response = await apiClient.delete(`/${id}`);
    return response.status === 204 || response.data; // status 204 (No Content)
  } catch (error) {
    console.error(`Failed to delete post ${id}`, error);
    throw error;
  }
};