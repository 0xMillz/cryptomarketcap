## Description

A CoinMarketCap-style market data aggregator written in TypeScript + TypeORM + [Nest](https://github.com/nestjs/nest) _(WIP)_

## Why NestJS?

"In recent years, thanks to Node.js, JavaScript has become the “lingua franca” of the web for both front and backend applications. This has given rise to awesome projects like Angular, React and Vue, which improve developer productivity and enable the creation of fast, testable, and extensible frontend applications. However, while plenty of superb libraries, helpers, and tools exist for Node (and server-side JavaScript), none of them effectively solve the main problem of - Architecture.

Nest provides an out-of-the-box application architecture which allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications. The architecture is heavily inspired by Angular."

## Why TypeORM instead of Sequelize?

TypeORM was built as a TypeScript-first ORM and Sequelize is still catching up.  
NestJS also works better with TypeORM for tasks like automated migrations and data seeding.

## Installation

```bash
$ npm i
```

## Running the API locally

```bash
$ docker compose up postgres
# Create/update postgres tables if needed
$ npm run typeorm:run-migrations

# watch mode
$ npm run start:dev

# OR production mode
$ npm run start:prod
```

## Testing

TODO: use [testcontainers](https://node.testcontainers.org/) for faster e2e tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Endpoints

```bash
# Landing page ("Hello Crypto!")
http://localhost:3000/api/v1

# Get all exchanges
http://localhost:3000/api/v1/exchanges

# Get a single exchange by id
http://localhost:3000/api/v1/exchanges/:id
```

## Database Migrations

1. Make sure your new/updated Entity is imported into the entities array in `typeOrm.config.ts`
2. Generate the migration file:

```bash
$ npm run typeorm:generate-migration --name=<migration-name-here>
```

3. Review the generated SQL in the newly created migration file in the `migrations` directory
4. Import the migration into the migrations array in `typeOrm.config.ts`
5. Run:

```bash
$ npm run typeorm:run-migrations
```

## Database Seeding

1. Generate a generic migration (seeder) file:

```bash
$ npm run typeorm -- migration:create ./src/database/migrations/Seed<name of what data you are seeding>
```

2. Use TypeORM's QueryRunner to insert data into existing table(s), example: `./src/database/migrations/1678403176953-SeedKrakenExchange.ts`
3. Import the migration into the migrations array in `./src/database/migrations/index.ts`
4. Run:

```bash
$ npm run typeorm:run-migrations
```
