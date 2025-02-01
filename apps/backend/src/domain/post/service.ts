import { PostInitial } from "@my-blog/types";
import { createPost, getPost, getPosts, getTags } from "./repository";

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
