import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProfilePage from './ProfilePage';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ProfileSchema } from '@/entities/Profile';
import { Currency } from '@/entities/Currency/model/types/currency';
import { Country } from '@/entities/Country/model/types/counry';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const defaultState: ProfileSchema = {
    error: undefined,
    isLoading: false,
    readonly: false,
    data: {
        username: '',
        age: 0,
        avatar: '',
        city: '',
        country: Country.UKRAINE,
        currency: Currency.UAH,
        first: '',
        lastname: '',
    },
    validateErrors: [],
};

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.decorators = [
    StoreDecorator({ profile: defaultState }),
];

export const Dark = Template.bind({});
Dark.decorators = [
    StoreDecorator({ profile: defaultState }),
    ThemeDecorator(Theme.DARK),
];
