import { Story } from "@storybook/react";
import { ComponentProps } from "react";
import { SiteIconContainer } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "uiParts/icon/SiteIcon",
  component: SiteIconContainer,
};

const Template: Story<ComponentProps<typeof SiteIconContainer>> = (args) => (
  <SiteIconContainer {...args} />
);

export const FirstStory = Template.bind({});
FirstStory.storyName = "SIte Icon";
FirstStory.args = {};
