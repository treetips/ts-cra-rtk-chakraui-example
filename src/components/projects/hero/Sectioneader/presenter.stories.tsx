import { Story } from "@storybook/react";
import { ComponentProps } from "react";
import { SectioneaderContainer } from ".";
import { AppButtonContainer } from "../../../uiParts/button/AppButton";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "uiParts/hero/Sectioneader",
  component: SectioneaderContainer,
};

const Template: Story<ComponentProps<typeof SectioneaderContainer>> = (
  args
) => <SectioneaderContainer {...args} />;

export const Story1 = Template.bind({});
Story1.storyName = "Sectioneader";
Story1.args = {
  title: "Title",
  actions: <AppButtonContainer>Button</AppButtonContainer>,
};
