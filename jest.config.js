module.exports = {
  testMatch: ["<rootDir>/__tests__/**/*.js"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/js/$1",
    "@constant/(.*)": "<rootDir>/constant/$1"
  }
};
