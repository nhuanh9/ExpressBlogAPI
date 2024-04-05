import {Repository} from "typeorm";
import {AppDataSource} from "../configuration/data-source";
import {Post} from "../model/Post";
import {PostDTO} from "../dto/PostDTO";

export class PostRepository {
    private repository: Repository<Post>;

    constructor() {
        this.repository = AppDataSource.getRepository(Post);
    }

    findAll = async (): Promise<any> | null => {
        return this.repository.find({
            order: {
                createAt: "DESC"
            }
        });
    }

    save = async (post: Post): Promise<any> | null => {
        return this.repository.save(post);
    }

    findById = async (id: number): Promise<Post> | null => {
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