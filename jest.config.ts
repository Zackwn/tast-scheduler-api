module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  bail: true,
  clearMocks: true,
  collectCoverageFrom: ["src/**"],
  coverageDirectory: '__tests__/coverage',
};