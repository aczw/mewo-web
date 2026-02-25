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
  ],
};

export default config;
