import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PageLoader } from './PageLoader';
import { Theme } from '@/shared/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'widgets/PageLoader',
    component: PageLoader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageLoader>;

const defaultArgs = {};

const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader {...args} />;

export const Light = Template.bind({});
Light.args = {
    ...defaultArgs,
};

export const Dark = Template.bind({});
Dark.args = {
    ...defaultArgs,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
