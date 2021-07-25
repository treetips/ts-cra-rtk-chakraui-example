import { Story } from "@storybook/react";
import { ComponentProps } from "react";
import { TaskEditButtonContainer } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "projects/button/task/TaskEditButton",
  component: TaskEditButtonContainer,
};

const Template: Story<ComponentProps<typeof TaskEditButtonContainer>> = (
  args
) => <TaskEditButtonContainer {...args} />;

export const Story1 = Template.bind({});
Story1.storyName = "Task Edit Button";
Story1.args = {};
