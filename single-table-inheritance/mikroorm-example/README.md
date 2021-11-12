# Single Table Inheritance: MikroORM 

This example illustrates how Single Table Inheritance works when using MikroORM. The "parent" entity is `Content` and the "child entities" in this example are: `Image`, `Article`, `Video`, and `Question`.

Creating the initial migration
```bash
npx mikro-orm migration:create --initial
```

Applying the migration in the Database:
```bash
npx mikro-orm migration:up
```

You can find the generated schema after running `db pull` on the example in [`./prisma/schema.prisma`](./prisma/schema.prisma)
