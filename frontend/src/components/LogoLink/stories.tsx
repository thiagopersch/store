import { StoryObj, Meta } from "@storybook/react";
import LogoLink from ".";

const meta: Meta<typeof LogoLink> = {
  title: "LogoLink",
  component: LogoLink,
  argTypes: {
    children: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof LogoLink>;

export const ImageOnly: Story = {
  args: {
    srcImage: (
      <div>
        <LogoLink srcImage="assets/images/logo.png" />
      </div>
    ),
    children: "",
  },
};

export const TextOnly: Story = {
  args: {
    children: "Logo",
    srcImage: "",
  },
};
