import { StoryObj, Meta } from "@storybook/react";
import TextInput from ".";

const meta: Meta<typeof TextInput> = {
  title: "TextInput",
  component: TextInput,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "white",
    },
  },
  args: {
    name: "inputName",
    label: "Input",
  },
  argTypes: {
    as: {
      control: { type: "radio" },
      options: ["input", "textarea"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Input = (args: Story) => (
  <form
    style={{ padding: 10, width: 400, margin: "0 auto" }}
    onSubmit={(values) => console.log(values)}
  >
    <TextInput as="input" label="Input" name="inputName" {...args} />
  </form>
);

export const TextArea = (args: Story) => (
  <form
    style={{ padding: 10, width: 400, margin: "0 auto" }}
    onSubmit={(values) => console.log(values)}
  >
    <TextInput
      as="textarea"
      label="Input"
      name="inputName"
      cols={4}
      rows={5}
      {...args}
    />
  </form>
);
