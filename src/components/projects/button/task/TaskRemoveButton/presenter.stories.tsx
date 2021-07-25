import { Story } from "@storybook/react";
import { ComponentProps } from "react";
import { TaskRemoveButtonContainer } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "projects/button/task/TaskRemoveButton",
  component: TaskRemoveButtonContainer,
};

const Template: Story<ComponentProps<typeof TaskRemoveButtonContainer>> = (
  args
) => <TaskRemoveButtonContainer {...args} />;

export const Story1 = Template.bind({});
Story1.storyName = "Task Remove Button";
Story1.args = {};
