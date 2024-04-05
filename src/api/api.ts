import {Router} from "express";
import {userApi} from "./userApi";
import {postApi} from "./postApi";
import {categoryApi} from "./categoryApi";

export const api = Router();
api.use("/users", userApi);
api.use("/post", postApi);
api.use("/categories", categoryApi);