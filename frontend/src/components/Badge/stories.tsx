import { StoryObj, Meta } from "@storybook/react";

import Badge from ".";

const meta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
  argTypes: {
    children: {
      type: "string",
    },
    styledType: {
      control: { type: "select" },
      options: ["success", "lightGrey", "blue", "orange", "danger", "lightRed"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Badge",
    styledType: "success",
  },
};
