import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, ButtonTheme } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const defaultArgs = {
    children: 'Text',
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    ...defaultArgs,
};

export const Clear = Template.bind({});
Clear.args = {
    theme: ButtonTheme.CLEAR,
    ...defaultArgs,
};

export const Outline = Template.bind({});
Outline.args = {
    theme: ButtonTheme.OUTLINE,
    ...defaultArgs,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    theme: ButtonTheme.OUTLINE,
    ...defaultArgs,
};
OutlineDark.decorators = [
    ThemeDecorator(Theme.DARK),
];
