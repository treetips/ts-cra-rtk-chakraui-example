import { Story } from "@storybook/react";
import { ComponentProps } from "react";
import { LanguageSelectionContainer } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "uiParts/select/LanguageSelection",
  component: LanguageSelectionContainer,
};

const Template: Story<ComponentProps<typeof LanguageSelectionContainer>> = (
  args
) => <LanguageSelectionContainer {...args} />;

export const Story1 = Template.bind({});
Story1.storyName = "Language Selection";
Story1.args = {};
