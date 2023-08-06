import { StoryObj, Meta } from "@storybook/react";
import RadioButton from ".";

const meta: Meta<typeof RadioButton> = {
  title: "RadioButton",
  component: RadioButton,
  args: {
    children: "RadioButton",
  },
  argTypes: {
    children: { type: "string" },
    labelColor: { type: "string" },
    id: { type: "string" },
    name: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    children: "My RadioButton",
    id: "myRadioButton",
    name: "myRadioButton",
  },
};

export const GroupRadios = (args: Story) => (
  <div style={{ display: "flex", gap: "20px" }}>
    <RadioButton id="radio1" name="radio1">
      <label htmlFor="radio1">Radio 1</label>
    </RadioButton>
    <RadioButton id="radio2" name="radio2">
      <label htmlFor="radio2">Radio 2</label>
    </RadioButton>
    <RadioButton id="radio3" name="radio3">
      <label htmlFor="radio3">Radio 3</label>
    </RadioButton>
  </div>
);
