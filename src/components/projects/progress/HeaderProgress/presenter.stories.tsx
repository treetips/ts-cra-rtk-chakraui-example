import { Story } from "@storybook/react";
import { ComponentProps } from "react";
import { HeaderProgressContainer } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "uiParts/progress/HeaderProgress",
  component: HeaderProgressContainer,
};

const Template: Story<ComponentProps<typeof HeaderProgressContainer>> = (
  args
) => <HeaderProgressContainer {...args} />;

export const Story1 = Template.bind({});
Story1.storyName = "Header Progress";
Story1.args = {
  isLoading: true,
};
