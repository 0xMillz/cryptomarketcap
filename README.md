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

## Running the app

```bash
# development
$ docker compose up postgres && npm run start

# watch mode
$ docker compose up postgres && npm run start:dev

# production mode
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

# Get all assets
http://localhost:3000/api/v1/assets

# Get a single asset 
http://localhost:3000/api/v1/assets/:id
```

