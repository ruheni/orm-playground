# Single Table Inheritance: TypeORM

Set up:
```bash
npx typeorm init --name <project_name> --database <provider>
```

Generate a migration:
```bash
npm run apply-migration <NAME>  # script in `package.json`. Related issue solution: https://stackoverflow.com/questions/56924509/typeorm-generates-an-empty-migration
```

Apply a migration:
```bash
npm run apply-migration
```

