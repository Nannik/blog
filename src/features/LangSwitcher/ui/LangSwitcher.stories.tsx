import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LangSwitcher } from './LangSwitcher';

export default {
    title: 'features/LangSwitcher',
    component: LangSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher { ...args } />;

export const Primary = Template.bind({});

export const Short = Template.bind({});
Short.args = {
    short: true,
};
