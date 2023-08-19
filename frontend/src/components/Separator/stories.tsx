import { StoryObj, Meta } from "@storybook/react";
import Separator from ".";
import SectionContainer from "../SectionContainer";

const meta: Meta<typeof Separator> = {
  title: "Separator",
  component: Separator,
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default = (args: Story) => (
  <SectionContainer>
    <Separator />
  </SectionContainer>
);
