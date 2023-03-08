export default {
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["<rootDir>/dist/*"],
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1",
  },
  testRegex: ".*\\.test\\.ts$",
  coverageDirectory: "./coverage",
  collectCoverage: true,
  restoreMocks: true,
};
