/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
//module.exports = {
export default{
  //preset: 'ts-jest',
  preset: "ts-jest/presets/default-esm",
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  testEnvironment: 'node',
};