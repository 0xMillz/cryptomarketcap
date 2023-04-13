import { setupTestPostgres, setupTypeormDataSource } from './integrationSetup';

module.exports = async () => {
    console.log('\n 1) GLOBAL SETUP START');
    const { port, container } = await setupTestPostgres();

    global.testPgContainer = container;
    global.testDataSource = await setupTypeormDataSource(+port);

    process.env.TEST_PG_PORT = `${port}`;
    process.env.POSTGRES_PORT = `${port}`;

    console.log('2) GLOBAL SETUP END');
};
