import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Sidebar } from './Sidebar';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/theme';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const defaultArgs = {};

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {
    ...defaultArgs,
};

export const Dark = Template.bind({});
Dark.args = {
    ...defaultArgs,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
