import { Story } from "@storybook/react";
import { ComponentProps } from "react";
import { AppButtonContainer } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "uiParts/button/AppButton",
  component: AppButtonContainer,
};

const Template: Story<ComponentProps<typeof AppButtonContainer>> = (args) => (
  <AppButtonContainer {...args} />
);

export const PrimaryStory1 = Template.bind({});
PrimaryStory1.storyName = "primary, solid";
PrimaryStory1.args = {
  children: "primary, solid",
  colorScheme: "primary",
  variant: "solid",
};
export const PrimaryStory2 = Template.bind({});
PrimaryStory2.storyName = "primary, outline";
PrimaryStory2.args = {
  children: "primary, outline",
  colorScheme: "primary",
  variant: "outline",
};
export const SecondaryStory1 = Template.bind({});
SecondaryStory1.storyName = "secondary, solid";
SecondaryStory1.args = {
  children: "secondary, solid",
  colorScheme: "secondary",
  variant: "solid",
};
export const SecondaryStory2 = Template.bind({});
SecondaryStory2.storyName = "secondary, outline";
SecondaryStory2.args = {
  children: "secondary, outline",
  colorScheme: "secondary",
  variant: "outline",
};
