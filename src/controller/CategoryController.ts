import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";
import {CategoryService} from "../service/CategoryService";
import {Category} from "../model/Category";

export class CategoryController {
    private categoryService: CategoryService;

    constructor() {
        this.categoryService = new CategoryService();
    }

    findAll = async (req: Request, res: Response) => {
        const list = await this.categoryService.findAll();
        if (list.length === 0) {
            return res.status(StatusCodes.NO_CONTENT).json({message: "NO DATA"})
        }
        return res.status(StatusCodes.OK).json(list);
    }

    save = async (req: Request, res: Response) => {
        const category: Category = await this.categoryService.add(req.body);
        return res.status(StatusCodes.CREATED).json(category);
    }

    findById = async (req, res: Response) => {
        const id: number = req.params.id;
        const newsDetail: Category = await this.categoryService.findById(id);
        return res.status(StatusCodes.OK).json(newsDetail);
    }

    remove = async (req, res: Response) => {
        const id: number = req.params.id;
        await this.categoryService.remove(id);
        return res.status(StatusCodes.OK).json({message: "Remove news success"});
    }
}