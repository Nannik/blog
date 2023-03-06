import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SidebarItem } from './SidebarItem';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/theme';
import Main from '@/shared/assets/icons/main-icon.svg';

export default {
    title: 'widgets/SidebarItem',
    component: SidebarItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        item: {
            text: 'text',
            to: '/',
            Icon: Main,
        },
    },
} as ComponentMeta<typeof SidebarItem>;

const Template: ComponentStory<typeof SidebarItem> = (args) => <SidebarItem { ...args } />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ ThemeDecorator(Theme.DARK) ];
