/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
    "@storybook/addon-knobs",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["..\\public"],
};
export default config;