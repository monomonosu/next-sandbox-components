import type { Meta, StoryObj } from "@storybook/react";
import { BasicCalendar } from "@/components/dates/BasicCalendar";

const meta: Meta<typeof BasicCalendar> = {
  title: "Dates/BasicCalendar",
  component: BasicCalendar,
};

export default meta;
type Story = StoryObj<typeof BasicCalendar>;

export const Primary: Story = {
  args: {},
};
