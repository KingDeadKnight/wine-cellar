import {Meta, StoryObj} from '@storybook/react';
import {Icon} from "@/components/atoms/icon/Icon";

const meta = {
    title: 'Atoms/Icon',
    component: Icon,
  } as Meta<typeof Icon>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {args: {iconName: "plus"}};