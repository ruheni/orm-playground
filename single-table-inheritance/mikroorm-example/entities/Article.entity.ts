import { Entity, Property } from "@mikro-orm/core";
import { Content } from "./Content.entity";

@Entity({ discriminatorValue: 'article' })
export class Article extends Content {
  @Property()
  body!: string;

  @Property()
  viewCount!: number;
}