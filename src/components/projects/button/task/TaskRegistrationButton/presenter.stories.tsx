import { Story } from "@storybook/react";
import { ComponentProps } from "react";
import { TaskRegistrationButtonContainer } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "projects/button/task/TaskRegistrationButton",
  component: TaskRegistrationButtonContainer,
};

const Template: Story<ComponentProps<typeof TaskRegistrationButtonContainer>> =
  (args) => <TaskRegistrationButtonContainer {...args} />;

export const Story1 = Template.bind({});
Story1.storyName = "Task Registration Button";
Story1.args = {};
