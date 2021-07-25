import { Story } from "@storybook/react";
import { ComponentProps } from "react";
import { DarkModeButtonContainer } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "projects/button/DarkModeButton",
  component: DarkModeButtonContainer,
};

const Template: Story<ComponentProps<typeof DarkModeButtonContainer>> = (
  args
) => <DarkModeButtonContainer {...args} />;

export const PrimaryStory1 = Template.bind({});
PrimaryStory1.storyName = "Dark Mode";
PrimaryStory1.args = {};
