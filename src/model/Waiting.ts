import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";
import {Post} from "./Post";
import {Category} from "./Category";

@Entity()
export class Waiting {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    postDate: Date;
    @ManyToOne(() => Post, (post) => post.waitings)
    post: Post;
}