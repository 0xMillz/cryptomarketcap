import { GenericContainer, StartedTestContainer } from 'testcontainers';
import { DataSource } from 'typeorm';
import { dataSourceOptions } from '../../typeORM.config';

export interface TestContainerData {
    container: StartedTestContainer;
    port: number;
}

export const setupTestPostgres = async (): Promise<TestContainerData> => {
    const PG_PORT = 5432;
    const pgContainer = new GenericContainer('postgres:14.1')
        .withExposedPorts(PG_PORT)
        .withEnvironment({
            POSTGRES_USER: 'cryptomarketcapadmin',
            POSTGRES_PASSWORD: 'password',
            POSTGRES_DB: 'cryptomarketcap',
        });

    const pgContainerStarted = await pgContainer.start();
    const containerPort = pgContainerStarted.getMappedPort(PG_PORT);

    console.log(`Test Postgres port: ${containerPort}`);

    return {
        container: pgContainerStarted,
        port: containerPort,
    };
};

export const setupTypeormDataSource = async (pgPort?: number): Promise<DataSource> => {
    let port = pgPort as number;

    if (!pgPort) {
        const { port: containerPort } = await setupTestPostgres();
        port = containerPort;
    }
    // @ts-ignore
    const dataSource = await new DataSource({
        ...dataSourceOptions,
        port,
    }).initialize();
    await dataSource.runMigrations();
    return dataSource;
};
