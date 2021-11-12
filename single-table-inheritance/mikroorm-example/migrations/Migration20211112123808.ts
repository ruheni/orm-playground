import { Migration } from '@mikro-orm/migrations';

export class Migration20211112123808 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "content" ("id" serial primary key, "title" varchar(255) not null, "description" varchar(255) not null, "type" text check ("type" in (\'article\', \'image\', \'question\', \'video\')) not null, "body" varchar(255) null, "width" int4 null, "height" int4 null, "file_name" varchar(255) null, "question" varchar(255) null, "answer" varchar(255) null, "duration" int4 null, "view_count" varchar(255) null, "url" varchar(255) null);');
    this.addSql('create index "content_type_index" on "content" ("type");');
  }

}
