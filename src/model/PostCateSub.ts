import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";
import {Post} from "./Post";
import {Category} from "./Category";
import {SubCategory} from "./SubCategory";

@Entity()
export class PostCateSub {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => Post, (post) => post.postCateSubs)
    post: Post;
    @ManyToOne(() => SubCategory, (subCategory) => subCategory.postCateSubs)
    subCategory: SubCategory;
}