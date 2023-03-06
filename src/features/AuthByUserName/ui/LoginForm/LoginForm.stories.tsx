import { ComponentMeta, ComponentStory } from '@storybook/react';

import LoginForm from './LoginForm';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm { ...args } />;

export const Primary = Template.bind({});
Primary.decorators = [ StoreDecorator({ loginForm: { username: '123', password: 'asdf' } }) ];

export const WithError = Template.bind({});
WithError.decorators = [
    StoreDecorator({ loginForm: { username: '123', password: 'asdf', error: 'error' } }),
];

export const Loading = Template.bind({});
Loading.decorators = [
    StoreDecorator({ loginForm: { username: '123', password: 'asdf', isLoading: true } }),
];

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ loginForm: { username: '123', password: 'asdf' } }),
];
