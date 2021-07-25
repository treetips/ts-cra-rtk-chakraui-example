import { Search2Icon } from "@chakra-ui/icons";
import { Story } from "@storybook/react";
import { ComponentProps } from "react";
import { AppIconButtonContainer } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "uiParts/button/AppIconButton",
  component: AppIconButtonContainer,
};

const Template: Story<ComponentProps<typeof AppIconButtonContainer>> = (
  args
) => <AppIconButtonContainer {...args} />;

export const PrimaryStory1 = Template.bind({});
PrimaryStory1.storyName = "primary, solid";
PrimaryStory1.args = {
  icon: <Search2Icon />,
  colorScheme: "primary",
  variant: "solid",
};
export const PrimaryStory2 = Template.bind({});
PrimaryStory2.storyName = "primary, outline";
PrimaryStory2.args = {
  icon: <Search2Icon />,
  colorScheme: "primary",
  variant: "outline",
};
export const SecondaryStory1 = Template.bind({});
SecondaryStory1.storyName = "secondary, solid";
SecondaryStory1.args = {
  icon: <Search2Icon />,
  colorScheme: "secondary",
  variant: "solid",
};
export const SecondaryStory2 = Template.bind({});
SecondaryStory2.storyName = "secondary, outline";
SecondaryStory2.args = {
  icon: <Search2Icon />,
  colorScheme: "secondary",
  variant: "outline",
};
