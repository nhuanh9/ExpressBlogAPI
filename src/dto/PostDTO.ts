import {SubCategory} from "../model/SubCategory";

export class PostDTO {
    id: number;
    image: string;
    title: string;
    content: string;
    createAt: Date;
    updateAt: Date;
    status: string;
    subCategory: SubCategory

    constructor(id: number, image: string, title: string, content: string, createAt: Date, updateAt: Date, status: string) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.content = content;
        this.createAt = createAt;
        this.updateAt = updateAt;
        this.status = status;
    }
}