import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CountrySelect } from './CountrySelect';

export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect { ...args } />;

export const Primary = Template.bind({
    readonly: false,
});

export const Readonly = Template.bind({});
Readonly.args = {
    readonly: true,
};
