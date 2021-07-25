import { SearchIcon } from "@chakra-ui/icons";
import { Story } from "@storybook/react";
import { ComponentProps } from "react";
import { SidenaviMenuItemContainer } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "uiParts/layout/SidenaviMenuItem",
  component: SidenaviMenuItemContainer,
};

const Template: Story<ComponentProps<typeof SidenaviMenuItemContainer>> = (
  args
) => <SidenaviMenuItemContainer {...args} />;

export const Story1 = Template.bind({});
Story1.storyName = "Internal Link";
Story1.args = {
  icon: <SearchIcon />,
  isExternal: false,
  url: "/",
  label: "Home",
};
export const Story2 = Template.bind({});
Story2.storyName = "External Link";
Story2.args = {
  isExternal: true,
  url: "https://storybook.js.org/",
  label: "Storybook",
};
