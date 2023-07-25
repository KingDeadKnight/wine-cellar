import { Meta, StoryObj } from '@storybook/react';
import {Drawer} from '@/components/molecules';

const meta =  {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Molecules/Drawer',
    component: Drawer,
  } as Meta<typeof Drawer>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default : Story = {};