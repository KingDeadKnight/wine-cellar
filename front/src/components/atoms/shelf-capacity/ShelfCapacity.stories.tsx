import { Meta, StoryObj } from '@storybook/react';
import {ShelfCapacity} from "./ShelfCapacity";

const meta = {
    title: 'Atoms/ShelfCapacity',
    tags: ["autodoc"],
    component: ShelfCapacity,
  } satisfies Meta<typeof ShelfCapacity>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {args: {max: 6}};