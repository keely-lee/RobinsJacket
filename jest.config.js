module.exports = {
  // clearMocks: true,
  // verbose: true,
  coverageDirectory: "coverage",
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  moduleDirectories: ["./node_modules"],
  transformIgnorePatterns: ["./node_modules/"],
  testEnvironment: "jsdom",
};
