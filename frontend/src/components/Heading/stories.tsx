import { StoryObj, Meta } from "@storybook/react";
import Heading from ".";

const meta: Meta<typeof Heading> = {
  title: "Heading",
  component: Heading,
  args: {
    children: "Heading",
  },
  argTypes: {
    children: { type: "string" },
    color: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: "My Heading",
    size: "lg",
    color: "primaryColor",
    textAlign: "left",
  },
};
