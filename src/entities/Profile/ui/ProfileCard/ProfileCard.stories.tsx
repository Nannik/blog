import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfileCard } from './ProfileCard';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country, Currency } from '@/shared/const/common';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard { ...args } />;

export const Empty = Template.bind({});
Empty.decorators = [
    StoreDecorator({
        profile: {},
    }),
];

export const WithData = Template.bind({});
WithData.decorators = [
    StoreDecorator({
        profile: {
            data: {
                first: 'test1',
                lastname: 'test2',
                currency: Currency.UAH,
                country: Country.UKRAINE,
                city: 'Kyiv',
                age: 22,
                username: 'test_username',
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kinopoisk.ru%2Ffilm%2F251733%2F&psig=AOvVaw0nLwfG9UAt_1rucUsbhnxT&ust=1678893720301000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKjOnNDc2_0CFQAAAAAdAAAAABAE',
            },
        },
    }),
];

export const WithError = Template.bind({});
WithError.decorators = [
    StoreDecorator({
        profile: {
            error: 'error',
        },
    }),
];

export const Loading = Template.bind({});
Loading.decorators = [
    StoreDecorator({
        profile: {
            isLoading: true,
        },
    }),
];
