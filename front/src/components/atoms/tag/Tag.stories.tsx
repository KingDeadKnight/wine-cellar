import { Meta, StoryObj } from '@storybook/react';
import {Tag} from "./Tag";

const meta = {
    title: 'Atoms/Tag',
    tags: ["autodoc"],
    component: Tag,
  } satisfies Meta<typeof Tag>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {args: {label: '2020'}};