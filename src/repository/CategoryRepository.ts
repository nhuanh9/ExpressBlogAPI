import {Repository} from "typeorm";
import {AppDataSource} from "../configuration/data-source";
import {Category} from "../model/Category";
export class CategoryRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = AppDataSource.getRepository(Category);
    }

    findAll = async (): Promise<Category[]> | null => {
        return this.repository.find();
    }

    save = async (category: Category): Promise<Category> | null => {
        return this.repository.save(category);
    }

    findById = async (id: number): Promise<Category> | null => {
        return this.repository.findOneBy({
            id: id
        });
    }

    remove = async (id: number): Promise<any> | null => {
        return this.repository.delete({
            id: id
        });
    }
}