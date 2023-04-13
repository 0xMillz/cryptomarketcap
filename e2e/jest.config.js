/**
 * Jest configuration file, see link for more information:
 * https://jestjs.io/docs/en/configuration
 *
 * @type { import('@jest/types').Config.InitialOptions }
 */
module.exports = {
    rootDir: '.',
    moduleFileExtensions: ['js', 'json', 'ts'],
    testEnvironment: 'node',
    transform: {
        '^.+\\.(t|j)s?$': 'ts-jest',
    },
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                publicPath: './reports/e2e',
                filename: 'index.html',
            },
        ],
    ],
    testMatch: ['<rootDir>/specs/**/*.spec.ts'],
    collectCoverageFrom: ['**/*.ts', '!demo.ts'],
    testTimeout: 120000,
    globalSetup: './setup/globalPostgresSetup.ts',
    globalTeardown: './setup/globalPostgresTeardown.ts',
    setupFilesAfterEnv: ['./setup/afterEnv.ts'],
};
