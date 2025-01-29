import { Router } from "express";
import {
  createPostController,
  getPostByIdController,
  getPostController,
} from "../domain/post/controller";
import multer from "multer";

const upload = multer({
  dest: "uploads/", // 업로드 디렉토리 지정
});
const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/posts", getPostController);
router.get("/posts/:id", getPostByIdController);
router.post("/posts", upload.single("thumbnail"), createPostController);

export default router;
