import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginForm } from './LoginForm';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/theme';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm { ...args } />;

export const Primary = Template.bind({});
export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ ThemeDecorator(Theme.DARK) ];
