import {CategoryRepository} from "../repository/CategoryRepository";
import {Category} from "../model/Category";

export class CategoryService {
    private categoryRepository: CategoryRepository;

    constructor() {
        this.categoryRepository = new CategoryRepository();
    }

    findAll = async (): Promise<Category[]> | null => {
        return this.categoryRepository.findAll();
    }

    add = async (category: Category): Promise<Category> | null => {
        return this.categoryRepository.save(category);
    }

    findById = async (id: number): Promise<Category> | null => {
        return this.categoryRepository.findById(id);
    }

    remove = async (id: number): Promise<any> | null => {
        return this.categoryRepository.remove(id);
    }
}