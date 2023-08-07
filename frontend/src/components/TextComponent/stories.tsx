import { StoryObj, Meta } from "@storybook/react";
import TextComponent from ".";

const meta: Meta<typeof TextComponent> = {
  title: "TextComponent",
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur, 
      adipisicing elit. Non veniam ipsam explicabo repellat 
      vel cupiditate fuga voluptatem illum molestias libero? 
      Nulla architecto ipsa cumque vel, possimus accusantium 
      libero aspernatur eos?`,
  },
  argTypes: {
    children: { type: "string" },
    color: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof TextComponent>;

export const Default: Story = {};
