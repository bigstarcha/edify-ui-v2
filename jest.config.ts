/** @jest-config-loader ts-node */
// or
/** @jest-config-loader esbuild-register */
import type { Config } from 'jest';

const config: Config = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['tsx', 'ts', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '^@components/(.*)$': '<rootDir>/src/components/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
};

export default config;
