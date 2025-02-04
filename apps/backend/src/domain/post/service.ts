import { PostInitial } from "@my-blog/types";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  getPostsByTagId,
  getTags,
  updatePost,
} from "./repository";

export const getPostService = async (page: number, limit: number) => {
  try {
    const posts = await getPosts(page, limit);
    return posts;
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
};

export const getPostByIdService = async (id: number) => {
  try {
    const post = await getPost(id);
    return post;
  } catch (error) {
    throw new Error("Failed to fetch post");
  }
};

export const getPostsByTagIdService = async (
  id: number,
  page: number,
  limit: number
) => {
  try {
    const posts = await getPostsByTagId(id, page, limit);
    return posts;
  } catch (error) {
    throw new Error("Failed to fetch posts by tag id");
  }
};

export const getTagsService = async () => {
  try {
    const tags = await getTags();
    return tags;
  } catch (error) {
    throw new Error("Failed to fetch tags");
  }
};

export const createPostService = async (post: PostInitial) => {
  try {
    const newPost = await createPost(post);
    return newPost;
  } catch (error) {
    console.error("Error in createPostService:", error);
    throw new Error("Failed to create post");
  }
};

export const updatePostService = async (id: number, post: PostInitial) => {
  try {
    const updatedPost = await updatePost(id, post);
    return updatedPost;
  } catch (error) {
    throw new Error("Failed to update post");
  }
};

export const deletePostService = async (id: number) => {
  try {
    const deletedPost = await deletePost(id);
    return deletedPost;
  } catch (error) {
    throw new Error("Failed to delete post");
  }
};
