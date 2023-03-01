import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Navbar } from './Navbar';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar { ...args } />;

export const NotAuth = Template.bind({});
NotAuth.decorators = [ StoreDecorator({}) ];

export const Auth = Template.bind({});
Auth.decorators = [ StoreDecorator({ user: { authData: {} } }) ];
