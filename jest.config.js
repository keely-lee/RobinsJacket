// /** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "jsdom",
  // testEnvironment: "node",
  transform: {
    // // "/\.[jt]sx?$/": ["ts-jest",{}],
    // "^.+.tsx?$": ["ts-jest",{}],
    "\\.[j]sx?$": "babel-jest",
  },
  coverageDirectory: "coverage",
  moduleDirectories: ["./node_modules"],
  transformIgnorePatterns: ["./node_modules/"],
  verbose: true,
};

