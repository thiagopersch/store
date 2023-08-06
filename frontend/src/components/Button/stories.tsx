import { Meta, StoryObj } from "@storybook/react";
import { PlusCircle } from "@styled-icons/feather";

import Button, { ButtonProps } from ".";
const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: { expanded: true },
  },
  argTypes: {
    children: {
      type: "string",
    },
    icon: {
      type: undefined,
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    styleType: {
      control: { type: "radio" },
      options: ["normal", "rounded", "outlined", "secondary", "circle"],
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
  },
};

export const widthIcon: Story = {
  args: {
    size: "large",
    children: "Adicionar Pessoa",
    icon: <PlusCircle />,
    styleType: "normal",
  },
};

export const CircleWithIcon: Story = {
  args: {
    size: "large",
    icon: <PlusCircle />,
    styleType: "circle",
  },
};
