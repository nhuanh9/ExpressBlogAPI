import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";
import {Post} from "./Post";
import {Category} from "./Category";
import {SubCategory} from "./SubCategory";
import {Tag} from "./Tag";

@Entity()
export class PostTag {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => Post, (post) => post.postTags)
    post: Post;
    @ManyToOne(() => Tag, (tag) => tag.postTags)
    tag: Tag;
}