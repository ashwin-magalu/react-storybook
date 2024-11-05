import React from "react";
import { Button } from "@chakra-ui/react";
import { action, actions } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Chakra/Button",
  component: Button,

  // argTypes: {
  //   backgroundColor: { control: "text" },
  //   children: { control: "text" },
  //   onClick: { action: "clicked" },
  // },

  parameters: {
    docs: {
      description: { component: "This is a custom Chakra Button component" },
    },
  },
};

// This will add custom controls to the buttons in the storybook UI
// const Template = (args) => <Button {...args} />;

// export const Success = Template.bind({});
// Success.args = {
//   backgroundColor: "green",
//   children: "Success",
// };
// export const Danger = Template.bind({});
// Danger.args = {
//   backgroundColor: "red",
//   children: "Danger",
// };

export const Success = () => (
  <Button onClick={action("Click Handler")} backgroundColor="green">
    Success
  </Button>
);
export const Danger = () => (
  <Button {...actions("onClick", "onMouseOver")} backgroundColor="red">
    Danger
  </Button>
);
export const Log = () => (
  <Button
    onClick={() =>
      console.log("Log button clicked", process.env.STORYBOOK_THEME)
    }
    backgroundColor="blue"
  >
    Log
  </Button>
);

export const Knobs = () => (
  <Button
    disabled={boolean("Disabled", false)}
    backgroundColor={text("Color", "purple")}
  >
    {text("Label", "Button Label")}
  </Button>
);
