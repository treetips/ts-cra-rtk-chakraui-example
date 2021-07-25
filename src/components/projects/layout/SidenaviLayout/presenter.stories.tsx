import { Heading } from "@chakra-ui/react";
import { Story } from "@storybook/react";
import { ComponentProps } from "react";
import { SidenaviLayoutContainer } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "uiParts/layout/SidenaviLayout",
  component: SidenaviLayoutContainer,
};

const Template: Story<ComponentProps<typeof SidenaviLayoutContainer>> = (
  args
) => <SidenaviLayoutContainer {...args} />;

export const Story1 = Template.bind({});
Story1.storyName = "SidenaviLayout";
Story1.args = {
  breadcrumbs: [
    {
      href: "/aaa",
      label: "aaa",
    },
    {
      href: "/bbb",
      label: "bbb",
    },
  ],
  pageTitle: "Title",
  pageDescription: "Description",
  children: <Heading as="h1">Contents</Heading>,
};
