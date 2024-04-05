import {Router} from "express";
import {CategoryController} from "../controller/CategoryController";

export const categoryApi = Router();
const categoryController = new CategoryController();
categoryApi.get("", categoryController.findAll);
categoryApi.post("", categoryController.save);
categoryApi.get("/:id", categoryController.findById);
categoryApi.delete("/:id", categoryController.remove);
