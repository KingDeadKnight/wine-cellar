import {StoryFn, Meta, StoryObj} from '@storybook/react';
import {Ellipse} from "@/components/atoms/";

const meta = {
    title: 'Atoms/Ellipse',
    tags: ["autodoc"],
    component: Ellipse,
  } satisfies Meta<typeof Ellipse>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {};

export const IconEllipse : Story = {args: {iconName: 'plus'}};

export const Red : Story = {args: { bgColor: "#9B1A30"}};

export const White : Story = {args: { bgColor: "#FAE7C0" }};

export const Pink: Story = {args: { bgColor: "#D18080" }};

export const Sparkling: Story = {args: { bgColor: "#D4B98A" }};