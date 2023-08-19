import { Meta, StoryObj } from "@storybook/react";
import { PlusCircle } from "@styled-icons/feather";

import Button, { ButtonProps } from ".";
const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      type: "string",
    },
    icon: {
      type: undefined,
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    styleType: {
      control: { type: "select" },
      options: ["normal", "rounded", "outlined", "secondary", "circle"],
    },
    fullWidth: {
      type: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    size: "small",
    styleType: "normal",
    fullWidth: false,
  },
};

export const withIcon: Story = {
  args: {
    size: "large",
    children: "Adicionar Pessoa",
    icon: <PlusCircle />,
    styleType: "normal",
    fullWidth: false,
  },
};

export const CircleWithIcon: Story = {
  args: {
    size: "large",
    icon: <PlusCircle />,
    styleType: "circle",
    children: "",
  },
};
