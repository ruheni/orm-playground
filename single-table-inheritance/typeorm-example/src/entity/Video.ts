import { ChildEntity, Column } from "typeorm";
import { Content } from "./Content";

@ChildEntity()
export class Video extends Content {

    @Column()
    duration: number;

    @Column()
    url: string;


    @Column()
    viewCount: number;
}
