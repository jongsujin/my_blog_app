import { Router } from "express";
import {
  createPostController,
  getPostByIdController,
  getPostController,
  getPostsByTagIdController,
  getTagsController,
  storage,
  uploadImageController,
} from "../domain/post/controller";
import multer from "multer";

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB 제한
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Not an image file"));
    }
  },
});
const router = Router();

router.get("/posts", getPostController);
router.get("/posts/:id", getPostByIdController);
router.post("/posts", createPostController);
router.get("/tags", getTagsController);
router.get("/tags/:id", getPostsByTagIdController);
router.post("/upload", upload.single("file"), uploadImageController);

export default router;
