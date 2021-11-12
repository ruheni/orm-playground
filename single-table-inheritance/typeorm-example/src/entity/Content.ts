import { Entity, TableInheritance, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Content {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

}