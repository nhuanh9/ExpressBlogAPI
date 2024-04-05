import {PostRepository} from "../repository/PostRepository";
import {PostDTO} from "../dto/PostDTO";
import {Post} from "../model/Post";

export class PostService {
    private postRepository: PostRepository;

    constructor() {
        this.postRepository = new PostRepository();
    }

    findAll = async (): Promise<PostDTO[]> | null => {
        return this.postRepository.findAll();
    }

    add = async (post: Post): Promise<PostDTO> | null => {
        return this.postRepository.save(post);
    }

    findById = async (id: number): Promise<Post> | null => {
        return this.postRepository.findById(id);
    }

    remove = async (id: number): Promise<any> | null => {
        return this.postRepository.remove(id);
    }
}