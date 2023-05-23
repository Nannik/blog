import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfileCard } from './ProfileCard';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import Avatar from '@/shared/assets/tests/avatar_img.png';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard { ...args } />;

export const Empty = Template.bind({});

export const WithData = Template.bind({});
WithData.args = {
    data: {
        first: 'test1',
        lastname: 'test2',
        currency: Currency.UAH,
        country: Country.UKRAINE,
        city: 'Kyiv',
        age: 22,
        username: 'test_username',
        avatar: Avatar,
    },
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
