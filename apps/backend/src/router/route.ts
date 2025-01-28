import { Router } from "express";
import { createPostController, getPostByIdController, getPostController } from "../domain/post/controller";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World");
})

router.get("/posts", getPostController);
router.get("/posts/:id", getPostByIdController);
router.post("/posts", createPostController);

export default router;