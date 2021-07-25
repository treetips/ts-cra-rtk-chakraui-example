import { Story } from "@storybook/react";
import { ComponentProps } from "react";
import { NoImageContainer } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "uiParts/image/NoImage",
  component: NoImageContainer,
};

const Template: Story<ComponentProps<typeof NoImageContainer>> = (args) => (
  <NoImageContainer {...args} />
);

export const Story1 = Template.bind({});
Story1.storyName = "width only";
Story1.args = {
  size: {
    width: "400px",
  },
  alt: "alt text",
};
export const Story2 = Template.bind({});
Story2.storyName = "height only";
Story2.args = {
  size: {
    height: "400px",
  },
  alt: "alt text",
};
export const Story3 = Template.bind({});
Story3.storyName = "width $ height";
Story3.args = {
  size: {
    width: "400px",
    height: "400px",
  },
  alt: "alt text",
};
