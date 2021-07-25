import { Story } from "@storybook/react";
import { ComponentProps } from "react";
import { HeaderContainer } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "uiParts/layout/Header",
  component: HeaderContainer,
};

const Template: Story<ComponentProps<typeof HeaderContainer>> = () => (
  <HeaderContainer />
);

export const Story1 = Template.bind({});
Story1.storyName = "Header";
Story1.args = {};
