import { Entity, Enum, PrimaryKey, Property } from "@mikro-orm/core";


@Entity({
  discriminatorColumn: 'type',
  abstract: true,
})
export abstract class Content {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @Property()
  description!: string;

  @Enum()
  type!: 'image' | 'question' | 'article' | 'video'
}
