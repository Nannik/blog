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

const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader { ...args } />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ ThemeDecorator(Theme.DARK) ];
