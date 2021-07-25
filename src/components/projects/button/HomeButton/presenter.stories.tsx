import { Story } from "@storybook/react";
import { ComponentProps } from "react";
import { HomeButtonContainer } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "projects/button/HomeButton",
  component: HomeButtonContainer,
};

const Template: Story<ComponentProps<typeof HomeButtonContainer>> = (args) => (
  <HomeButtonContainer {...args} />
);

export const Story1 = Template.bind({});
Story1.storyName = "Home Button";
Story1.args = {};
