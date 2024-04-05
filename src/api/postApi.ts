import {Router} from "express";
import {PostController} from "../controller/PostController";

export const postApi = Router();
const postController = new PostController();
postApi.get("", postController.findAll);
postApi.post("", postController.save);
postApi.get("/:id", postController.findById);
postApi.delete("/:id", postController.remove);
