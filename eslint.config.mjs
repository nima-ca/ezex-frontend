import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends(
        "next/core-web-vitals",
        "next/typescript",
        "plugin:storybook/recommended",
    ),
    {
        rules: {
            "no-implicit-coercion": "error",
            "no-negated-condition": "error",
            "no-else-return": "error",
        },
    },
];

export default eslintConfig;
