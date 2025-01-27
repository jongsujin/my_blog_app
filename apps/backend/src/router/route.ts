import { Router } from "express";
import { getPostByIdController, getPostController } from "../domain/post/controller";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World");
})

router.get("/posts", getPostController);
router.get("/posts/:id", getPostByIdController);

export default router;