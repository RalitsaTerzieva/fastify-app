module.exports = {
    testEnvironment: "jsdom", // Set to 'jsdom' if you need browser-like environment for Next.js pages
    testMatch: ['**/?(*.)+(test).js'], // Detects all files ending in .test.js
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'], // Add other extensions as needed
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testTimeout: 20000,
};