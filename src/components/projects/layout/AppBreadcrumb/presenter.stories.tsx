import { Story } from "@storybook/react";
import { ComponentProps } from "react";
import { AppBreadcrumbContainer } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "uiParts/layout/AppBreadcrumb",
  component: AppBreadcrumbContainer,
};

const Template: Story<ComponentProps<typeof AppBreadcrumbContainer>> = (
  args
) => <AppBreadcrumbContainer {...args} />;

export const Story1 = Template.bind({});
Story1.storyName = "AppBreadcrumb";
Story1.args = {
  links: [
    {
      href: "/aaa",
      label: "aaa",
    },
    {
      href: "/bbb",
      label: "bbb",
    },
  ],
};
