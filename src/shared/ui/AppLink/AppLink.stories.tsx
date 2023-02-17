import { ComponentMeta } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';
import { Theme } from '@/shared/theme';
import {
    appThemeCreator, createTemplate, TemplateCreator, TemplateProxy,
} from '@/shared/lib';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'TEXT',
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

type AppLinkTemplateCreator<T> = TemplateCreator<T, typeof AppLink>;
const themeCreator: AppLinkTemplateCreator<AppLinkTheme> = (theme) => (template) => {
    if (!template.args) template.args = {};
    template.args.theme = theme;

    return template;
};

const createAppLinkTemplate = (proxies: TemplateProxy<typeof AppLink>[]) => (
    createTemplate<typeof AppLink>(proxies, AppLink)
);

export const Primary = createAppLinkTemplate([
    themeCreator(AppLinkTheme.PRIMARY),
    appThemeCreator(Theme.LIGHT),
]);
export const PrimaryDark = createAppLinkTemplate([
    themeCreator(AppLinkTheme.PRIMARY),
    appThemeCreator(Theme.DARK),
]);
export const Secondary = createAppLinkTemplate([
    themeCreator(AppLinkTheme.SECONDARY),
    appThemeCreator(Theme.LIGHT),
]);
export const SecondaryDark = createAppLinkTemplate([
    themeCreator(AppLinkTheme.SECONDARY),
    appThemeCreator(Theme.DARK),
]);
export const Disabled = createAppLinkTemplate([
    themeCreator(AppLinkTheme.DISABLED),
    appThemeCreator(Theme.LIGHT),
]);
export const DisabledDark = createAppLinkTemplate([
    themeCreator(AppLinkTheme.DISABLED),
    appThemeCreator(Theme.DARK),
]);
