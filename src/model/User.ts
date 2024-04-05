import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Matches, MinLength} from "class-validator";
import {Post} from "./Post";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "varchar", nullable: false, unique: true})
    @MinLength(20)
    username: string;
    @Column({type: "varchar"})
    password: string;
    @Column({type: "varchar", default: "USER"})
    role: string;
    @Column({type: "varchar", default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqUUFTn5KFq563sgGFYgoxYfq5RfEWHk4dNhgfE5g2A&s"})
    avatar: string;
    @Column({type: "datetime", nullable: true})
    dateOfBirth: Date;
    @Column({type: "varchar", nullable: false, unique: true})
    email: string;
    @Column({type: "int", nullable: true})
    gender: number;
    @Column()
    status: string;
    @OneToMany(() => Post, (post) => post.user)
    posts: Post[];
    @Column()
    createAt: Date;
    @Column()
    updateAt: Date;
}