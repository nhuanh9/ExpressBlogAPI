import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";
import {PostCateSub} from "./PostCateSub";
import {Waiting} from "./Waiting";
import {PostTag} from "./PostTag";
import {Likes} from "./Likes";
import {Comment} from "./Comment";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column({type: "text"})
    content: string;
    @Column()
    status: string;
    @Column()
    createAt: Date;
    @Column()
    updateAt: Date;
    @Column()
    image: string;
    @ManyToOne(() => User, (user) => user.posts)
    user: User;
    @OneToMany(() => PostCateSub, (postCateSubs) => postCateSubs.post)
    postCateSubs: PostCateSub[];
    @OneToMany(() => PostTag, (postTag) => postTag.post)
    postTags: PostTag[];
    @OneToMany(() => Waiting, (waiting) => waiting.post)
    waitings: Waiting[];
    @OneToMany(() => Likes, (likes) => likes.post)
    likes: Likes[];
    @OneToMany(() => Comment, (comments) => comments.post)
    comments: Comment[];
}