import { Story } from "@storybook/react";
import { ComponentProps } from "react";
import { FooterContainer } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "uiParts/layout/Footer",
  component: FooterContainer,
};

const Template: Story<ComponentProps<typeof FooterContainer>> = () => (
  <FooterContainer />
);

export const Story1 = Template.bind({});
Story1.storyName = "Footer";
Story1.args = {};
