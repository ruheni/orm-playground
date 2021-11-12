import { Entity, Property } from "@mikro-orm/core";
import { Content } from "./Content.entity";

@Entity({ discriminatorValue: 'video' })
export class Video extends Content {
  @Property()
  duration!: number;

  @Property()
  url!: string;

  @Property()
  viewCount!: string;
}