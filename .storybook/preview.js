import { ChakraProvider, defaultSystem, Box } from "@chakra-ui/react";
import { withConsole } from "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    docs: { inlineStories: true },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    a11y: {
      // Optional: Customize the default accessibility checks
      config: {},
      options: {
        checks: { "color-contrast": { options: { noScroll: true } } },
        restoreScroll: true,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      // Added to sort stories in ascending order of their names
      storySort: (a, b) =>
        a.id === b.id
          ? 0
          : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
  },
  decorators: [
    (Story) => (
      <ChakraProvider value={defaultSystem}>
        <Box m={4}>
          <Story />
        </Box>
      </ChakraProvider>
    ),
    (storyFn, context) => withConsole()(storyFn)(context),
    withKnobs,
  ],
};

export default preview;
