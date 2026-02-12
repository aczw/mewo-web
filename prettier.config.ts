import type { Config } from "prettier";

const config: Config = {
  plugins: ["prettier-plugin-astro"],
  experimentalTernaries: true,
  printWidth: 80,
  proseWrap: "never",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: "*.jsonc",
      options: {
        // See https://github.com/prettier/prettier/issues/15956
        trailingComma: "none",
      },
    },
  ],
};

export default config;
