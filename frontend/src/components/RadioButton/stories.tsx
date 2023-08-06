import { StoryObj, Meta } from "@storybook/react";
import RadioButton from ".";

const meta: Meta<typeof RadioButton> = {
  title: "RadioButton",
  component: RadioButton,
  args: {
    children: "RadioButton",
    id: "radioButton",
    name: "radioButton",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    children: "My RadioButton",
  },
};

export const GroupRadios = (args: Story) => (
  <div style={{ display: "flex", gap: "20px" }}>
    <RadioButton {...args} />
    <RadioButton {...args} />
    <RadioButton {...args} />
  </div>
);
