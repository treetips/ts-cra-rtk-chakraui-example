import { Story } from "@storybook/react";
import { ComponentProps } from "react";
import { TaskDetailButtonContainer } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "projects/button/task/TaskDetailButton",
  component: TaskDetailButtonContainer,
};

const Template: Story<ComponentProps<typeof TaskDetailButtonContainer>> = (
  args
) => <TaskDetailButtonContainer {...args} />;

export const Story1 = Template.bind({});
Story1.storyName = "Task Detail Button";
Story1.args = {};
