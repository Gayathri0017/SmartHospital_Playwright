module.exports = {
  default: {
    formatOptions: {
      snippetInterface: "async-await"
    },
    dryRun: false,
    require: [
      "src/test/steps/*.ts",
      "src/hooks/*.ts"
    ],
    paths: ["src/test/features/*.feature"],
    requireModule: ["ts-node/register"]
  },

  rerun: {
    formatOptions: {
      snippetInterface: "async-await"
    },
    dryRun: false,
    require: [
      "src/test/steps/*.ts",
      "src/hooks/*.ts"
    ],
    requireModule: ["ts-node/register"]
  }
};
