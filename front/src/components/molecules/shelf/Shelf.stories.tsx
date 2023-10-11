import { Meta, StoryObj } from '@storybook/react';
import {Shelf} from '@/components/molecules';

const meta =  {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Molecules/Shelf',
    component: Shelf,
  } as Meta<typeof Shelf>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default : Story = {};