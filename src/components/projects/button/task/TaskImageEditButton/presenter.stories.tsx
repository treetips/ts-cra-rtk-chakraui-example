import { Story } from "@storybook/react";
import { ComponentProps } from "react";
import { TaskImageEditButtonContainer } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "projects/button/task/TaskImageEditButton",
  component: TaskImageEditButtonContainer,
};

const Template: Story<ComponentProps<typeof TaskImageEditButtonContainer>> = (
  args
) => <TaskImageEditButtonContainer {...args} />;

export const Story1 = Template.bind({});
Story1.storyName = "Task Image Edit Button";
Story1.args = {};
