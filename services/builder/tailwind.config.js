import { base, tokens } from "@workspace/tailwind-config";

module.exports = {
    presets: [ base, tokens ],
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
};
