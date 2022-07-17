/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(css|png)$": "identity-obj-proxy"
  }
};
