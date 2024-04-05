import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";
import {Post} from "./Post";
import {SubCategory} from "./SubCategory";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column({type: "text"})
    icon: string;
    @OneToMany(() => SubCategory, (subCategory) => subCategory.category)
    subCategory: SubCategory[];
}