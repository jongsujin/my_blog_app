import { Router } from "express";
import { getPostController } from "../domain/post/controller";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World");
})

router.get("/posts", getPostController);

export default router;