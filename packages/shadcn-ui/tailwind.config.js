import { base, tokens } from "@workspace/tailwind-config";

module.exports = {
    presets: [base, tokens],
    content: ['./src/components/**/*', "./src/styles/*"],
};
