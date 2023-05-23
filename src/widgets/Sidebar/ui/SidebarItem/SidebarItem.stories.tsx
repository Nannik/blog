import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SidebarItem } from './SidebarItem';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/theme';
import Main from '@/shared/assets/icons/main-icon.svg';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'widgets/SidebarItem',
    component: SidebarItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        Item: {
            text: 'text',
            to: '/',
            Icon: Main,
        },
    },
} as ComponentMeta<typeof SidebarItem>;

const Template: ComponentStory<typeof SidebarItem> = (args) => <SidebarItem { ...args } />;

export const Light = Template.bind({});
Light.decorators = [
    StoreDecorator({
        user: {},
    }),
];

export const Dark = Template.bind({});
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: {},
    }),
];
