import { ChildEntity, Column } from "typeorm";
import { Content } from "./Content";

@ChildEntity()
export class Article extends Content {

  @Column()
  body: number;


  @Column()
  viewCount: number;
}
