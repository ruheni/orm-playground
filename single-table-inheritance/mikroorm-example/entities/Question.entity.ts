import { Entity, Property } from "@mikro-orm/core";
import { Content } from "./Content.entity";

@Entity({ discriminatorValue: 'question' })
export class Question extends Content {
  @Property()
  question!: string;

  @Property()
  answer!: string;
}