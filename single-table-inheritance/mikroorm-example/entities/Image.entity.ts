import { Entity, Property } from "@mikro-orm/core";
import { Content } from "./Content.entity";

@Entity({ discriminatorValue: 'image' })
export class Image extends Content {
  @Property()
  width!: number;

  @Property()
  height!: number;

  @Property()
  url!: string

  @Property()
  fileName!: string;
}