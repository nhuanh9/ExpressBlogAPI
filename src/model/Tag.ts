import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";
import {Post} from "./Post";
import {Category} from "./Category";
import {PostCateSub} from "./PostCateSub";
import {PostTag} from "./PostTag";

@Entity()
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;

    @OneToMany(() => PostTag, (postTag) => postTag.tag)
    postTags: PostTag[];
}