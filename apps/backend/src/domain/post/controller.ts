import { Request, Response } from "express";
import multer from "multer";
import {
  createPostService,
  getPostByIdService,
  getPostService,
} from "./service";

const storage = multer.diskStorage({
  destination: "uploads/posts",
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

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

export const createPostController = async (req: Request, res: Response) => {
  try {
    const { title, content, tags, slug } = req.body;
    const thumbnail = req.file?.filename; // 업로드된 파일명

    const newPost = await createPostService({
      title,
      content,
      tags: JSON.parse(tags),
      slug,
      thumbnail: thumbnail || "",
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
