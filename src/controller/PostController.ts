import {PostService} from "../service/PostService";
import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";
import {Post} from "../model/Post";
import {PostDTO} from "../dto/PostDTO";

export class PostController {
    private postService: PostService;

    constructor() {
        this.postService = new PostService();
    }

    findAll = async (req: Request, res: Response) => {
        const list = await this.postService.findAll();
        if (list.length === 0) {
            return res.status(StatusCodes.NO_CONTENT).json({message: "Hiện bài không có bài viết nào"})
        }
        return res.status(StatusCodes.OK).json(list);
    }

    save = async (req: Request, res: Response) => {
        const post: PostDTO = await this.postService.add(req.body);
        return res.status(StatusCodes.CREATED).json(post);
    }

    findById = async (req, res: Response) => {
        const id: number = req.params.id;
        const newsDetail: Post = await this.postService.findById(id);
        return res.status(StatusCodes.OK).json(newsDetail);
    }

    remove = async (req, res: Response) => {
        const id: number = req.params.id;
        await this.postService.remove(id);
        return res.status(StatusCodes.OK).json({message: "Remove news success"});
    }
}