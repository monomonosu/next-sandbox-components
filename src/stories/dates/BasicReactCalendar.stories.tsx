import type { Meta, StoryObj } from "@storybook/react";
import { BasicReactCalendar } from "@/components/dates/BasicReactCalendar";

const meta: Meta<typeof BasicReactCalendar> = {
  title: "Dates/BasicReactCalendar",
  component: BasicReactCalendar,
};

export default meta;
type Story = StoryObj<typeof BasicReactCalendar>;

export const Primary: Story = {
  args: {},
};
