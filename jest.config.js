// jest.config.js
export default {
  testEnvironment: "node",
  transform: {}, // no Babel
  extensionsToTreatAsEsm: [".js"],
  moduleFileExtensions: ["js", "json"],
  // optional if you keep tests under tests/:
  // testMatch: ['**/tests/**/*.test.js'],
};
