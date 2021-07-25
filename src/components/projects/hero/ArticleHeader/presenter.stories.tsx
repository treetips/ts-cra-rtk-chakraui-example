import { Text } from "@chakra-ui/layout";
import { Story } from "@storybook/react";
import { ComponentProps } from "react";
import { ArticleHeaderContainer } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "uiParts/hero/ArticleHeader",
  component: ArticleHeaderContainer,
};

const Template: Story<ComponentProps<typeof ArticleHeaderContainer>> = (
  args
) => <ArticleHeaderContainer {...args} />;

export const FirstStory = Template.bind({});
FirstStory.storyName = "string";
FirstStory.args = {
  pageTitle: "Page title",
  pageDescription: "Page description",
};

export const SecondStory = Template.bind({});
SecondStory.storyName = "ReactNode";
SecondStory.args = {
  pageTitle: <Text as="h1">H1 title</Text>,
  pageDescription: <Text as="h2">H2 description</Text>,
};
