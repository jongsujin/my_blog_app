import { Request, Response } from "express";
import multer from "multer";
import {
  createPostService,
  deletePostService,
  getPostByIdService,
  getPostsByTagIdService,
  getPostService,
  getTagsService,
  updatePostService,
} from "./service";

export const storage = multer.diskStorage({
  destination: "uploads/posts",
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

export const getPostController = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const posts = await getPostService(page, limit);
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error in getPostController:", error);
    res.status(500).json({ message: "Failed to fetch posts" });
  }
};

export const getPostByIdController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const post = await getPostByIdService(id);
    res.status(200).json(post);
  } catch (error) {
    console.error("Error in getPostByIdController:", error);
    res.status(500).json({ message: "Failed to fetch post" });
  }
};

export const getPostsByTagIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const posts = await getPostsByTagIdService(id, page, limit);
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error in getPostsByTagIdController:", error);
    res.status(500).json({ message: "Failed to fetch posts by tag id" });
  }
};

export const getTagsController = async (req: Request, res: Response) => {
  try {
    const tags = await getTagsService();
    res.status(200).json(tags);
  } catch (error) {
    console.error("Error in getTagsController:", error);
    res.status(500).json({ message: "Failed to fetch tags" });
  }
};

export const createPostController = async (req: Request, res: Response) => {
  try {
    const { title, content, tags, slug, thumbnail, description } = req.body;

    const newPost = await createPostService({
      title,
      description,
      content,
      tags: Array.isArray(tags) ? tags : JSON.parse(tags), // 수정된 부분
      slug,
      thumbnail: thumbnail,
    });

    res.status(201).json({
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    console.error("Error in createPostController:", error);
    res.status(500).json({ message: "Failed to create post" });
  }
};

export const uploadImageController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ message: "No file uploaded" });
      return;
    }
    const imageUrl = `/uploads/${req.file.filename}`;

    res.status(200).json({
      imageUrl,
      message: "Image uploaded successfully",
    });
  } catch (error) {
    console.error("Error in uploadImageController:", error);
    res.status(500).json({ message: "Failed to upload image" });
  }
};

export const updatePostController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const post = req.body;
    const updatedPost = await updatePostService(id, post);
    res.status(200).json({
      message: "Post updated successfully",
      post: updatedPost,
    });
  } catch (error) {
    console.error("Error in updatePostController:", error);
    res.status(500).json({ message: "Failed to update post" });
  }
};

export const deletePostController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deletedPost = await deletePostService(id);
    res.status(200).json({
      message: "Post deleted successfully",
      post: deletedPost,
    });
  } catch (error) {
    console.error("Error in deletePostController:", error);
    res.status(500).json({ message: "Failed to delete post" });
  }
};
