import { StoryObj, Meta } from "@storybook/react";
import SectionContainer from ".";

const meta: Meta<typeof SectionContainer> = {
  title: "SectionContainer",
  component: SectionContainer,
  argTypes: {
    children: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof SectionContainer>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          vel nam eum facere vero, possimus voluptatibus doloribus corrupti
          voluptates iure. Doloremque provident perspiciatis inventore at facere
          repellendus quis accusamus nostrum!
        </p>
      </div>
    ),
  },
};
