import { Meta, StoryObj } from "@storybook/react";
import Checkbox from ".";

const meta: Meta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    label: { type: "string" },
    labelColor: { type: "string" },
    onCheck: {
      action: "checked",
    },
    disabled: {
      type: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "My Checkbox",
    labelColor: "primaryColor",
  },
};

export const NotLabel: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
    inactive: true,
  },
};
