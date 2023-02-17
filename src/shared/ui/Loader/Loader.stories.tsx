import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Loader } from './Loader';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/theme';

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader { ...args } />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ ThemeDecorator(Theme.DARK) ];
