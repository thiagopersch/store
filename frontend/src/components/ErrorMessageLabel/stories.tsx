import { StoryObj, Meta } from "@storybook/react";
import ErrorMessageLabel from ".";

const meta: Meta<typeof ErrorMessageLabel> = {
  title: "ErrorMessageLabel",
  component: ErrorMessageLabel,
  args: {
    children: "ErrorMessageLabel",
  },
  argTypes: {
    children: { type: "string" },
    color: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorMessageLabel>;

export const Default: Story = {
  args: {
    children: "My ErrorMessageLabel",
    color: "primaryRed",
    size: "sm",
    textAlign: "left",
  },
};
