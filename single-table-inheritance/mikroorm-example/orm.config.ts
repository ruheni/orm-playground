import { MikroORM } from "@mikro-orm/core";

export default {
  migrations: {
    path: './migrations',
    tableName: 'migrations',
    transactional: true,
  },
  tsNode: process.env.NODE_DEV === 'true' ? true : false,
  user: 'admin',
  password: 'password',
  dbName: 'sti-mikroorm',
  host: 'localhost',
  port: 5435,
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['entities/*.entity.ts'],
  type: 'postgresql',
} as Parameters<typeof MikroORM.init>[0]