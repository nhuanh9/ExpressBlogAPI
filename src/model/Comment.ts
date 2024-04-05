import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";
import {PostCateSub} from "./PostCateSub";
import {Waiting} from "./Waiting";
import {PostTag} from "./PostTag";
import {Post} from "./Post";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    status: string;
    @Column()
    content: string;
    @Column()
    createAt: Date;
    @Column()
    updateAt: Date;
    @Column()
    image: string;
    @ManyToOne(() => User, (user) => user.posts)
    user: User;
    @ManyToOne(() => Post, (post) => post.comments)
    post: Post;
}