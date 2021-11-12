import {MigrationInterface, QueryRunner} from "typeorm";

export class ProjectInit1636723741802 implements MigrationInterface {
    name = 'ProjectInit1636723741802'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "content" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "body" integer, "viewCount" integer, "width" integer, "height" integer, "url" character varying, "fileName" character varying, "question" integer, "answer" character varying, "duration" integer, "type" character varying NOT NULL, CONSTRAINT "PK_6a2083913f3647b44f205204e36" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b9b0eb0c1e1e5f61a56ef072bc" ON "content" ("type") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_b9b0eb0c1e1e5f61a56ef072bc"`);
        await queryRunner.query(`DROP TABLE "content"`);
    }
}
