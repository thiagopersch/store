import { StoryObj, Meta } from "@storybook/react";
import Search from ".";

const meta: Meta<typeof Search> = {
  title: "Search",
  component: Search,
  args: {
    children: "Search",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {
    children: "My Search",
  },
};
