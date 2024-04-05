import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";
import {Post} from "./Post";
import {Category} from "./Category";
import {PostCateSub} from "./PostCateSub";

@Entity()
export class SubCategory {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @ManyToOne(() => Category, (category) => category.subCategory)
    category: Category;
    @OneToMany(() => PostCateSub, (postCateSubs) => postCateSubs.post)
    postCateSubs: PostCateSub[];
}