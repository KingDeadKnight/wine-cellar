import { Meta, StoryObj } from '@storybook/react';
import {Button} from "./Button";

const meta = {
    title: 'Atoms/Button',
    tags: ["autodoc"],
    component: Button,
  } satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary : Story = {args: {label: 'A button'}};
export const Secondary : Story = {args: {label: 'A button', variant: 'secondary'}};

export const IconOnly : Story = {args: {iconName: 'dotssix', variant: 'primary'}};