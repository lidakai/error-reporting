const packageJson = require("./package.json");
const path = require("path");
const getPackageName = () => {
  return packageJson.name;
};

const config = {
  compilationOptions: {
    preferredConfigPath: path.resolve(__dirname, "./tsconfig-lib.json"),
  },
  entries: [
    {
      filePath: path.resolve(__dirname, "./libs/index.ts"),
      outFile: path.resolve(__dirname, `./dist/${getPackageName()}.d.ts`),
      noCheck: false,
    },
  ],
};

module.exports = config;
