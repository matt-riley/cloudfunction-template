module.exports = {
  collectCoverage: true,
  coverageReporters: ["lcov"],
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "@swc-node/jest",
  },
};
