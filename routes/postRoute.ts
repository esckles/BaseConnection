import { Router } from "express";
import { createPost } from "../controller/postController";

const router = Router();
router.route("/:userId/create-post").post(createPost);

export default router;
