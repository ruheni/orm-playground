import { MikroORM } from "@mikro-orm/core";
import config from "./orm.config";


async function main() {

  const connect = async (): Promise<void> => {
    try {
      const orm = await MikroORM.init(config);


      const migrator = orm.getMigrator();
      const migrations = await migrator.getPendingMigrations();
      if (migrations && migrations.length > 0) {
        await migrator.up();
      }
    } catch (error: any) {
      console.error('📌 Could not connect to the database', error);
      throw Error(error);
    }
  };

  connect()
}