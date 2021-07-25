import { Story } from "@storybook/react";
import { ComponentProps } from "react";
import { TaskListButtonContainer } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "projects/button/task/TaskListButton",
  component: TaskListButtonContainer,
};

const Template: Story<ComponentProps<typeof TaskListButtonContainer>> = (
  args
) => <TaskListButtonContainer {...args} />;

export const Story1 = Template.bind({});
Story1.storyName = "Task List Button";
Story1.args = {};
