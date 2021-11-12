import { ChildEntity, Column } from "typeorm";
import { Content } from "./Content";

@ChildEntity()
export class Image extends Content {

    @Column()
    width: number;


    @Column()
    height: number;


    @Column()
    url: string;


    @Column()
    fileName: string;
}
