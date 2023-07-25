import { ComponentMeta } from '@storybook/react';

import { Text, TextAlign, TextTheme } from './Text';
import { appThemeCreator } from '@/shared/lib/helpers/storybook/storiesTemplateCreators';
import {
    createTemplate, TemplateCreator, TemplateProxy,
} from '@/shared/lib/helpers/storybook/createTemplate';
import { Theme } from '@/shared/theme';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

type TextTemplateCreator<T> = TemplateCreator<T, typeof Text>;

const themeCreator: TextTemplateCreator<TextTheme> = (theme) => (template) => {
    if (!template.args) template.args = {};
    template.args.theme = theme;

    return template;
};

const alignCreator: TextTemplateCreator<TextAlign> = (align) => (template) => {
    if (!template.args) template.args = {};
    template.args.align = align;

    return template;
};

const textCreator: TextTemplateCreator<'text' | 'title'> = (textType) => (template) => {
    if (!template.args) template.args = {};
    template.args[textType] = 'test text';

    return template;
};

const createTextTemplate = (templateProxies: TemplateProxy<typeof Text>[]) => (
    createTemplate<typeof Text>(templateProxies, Text)
);

export const Left = createTextTemplate([
    textCreator('text'),
    alignCreator(TextAlign.LEFT),
]);
export const Center = createTextTemplate([
    textCreator('text'),
    alignCreator(TextAlign.CENTER),
]);
export const Right = createTextTemplate([
    textCreator('text'),
    alignCreator(TextAlign.RIGHT),
]);

export const Primary = createTextTemplate([
    textCreator('text'),
]);
export const Error = createTextTemplate([
    themeCreator(TextTheme.ERROR),
    textCreator('text'),
]);
export const Disabled = createTextTemplate([
    themeCreator(TextTheme.DISABLED),
    textCreator('text'),
]);

export const PrimaryTitle = createTextTemplate([
    textCreator('text'),
]);
export const ErrorTitle = createTextTemplate([
    themeCreator(TextTheme.ERROR),
    textCreator('text'),
]);
export const DisabledTitle = createTextTemplate([
    themeCreator(TextTheme.DISABLED),
    textCreator('text'),
]);

export const PrimaryTitleText = createTextTemplate([
    textCreator('text'),
    textCreator('title'),
]);
export const ErrorTitleText = createTextTemplate([
    themeCreator(TextTheme.ERROR),
    textCreator('text'),
    textCreator('title'),
]);
export const DisabledTitleText = createTextTemplate([
    themeCreator(TextTheme.DISABLED),
    textCreator('text'),
    textCreator('title'),
]);

export const PrimaryDark = createTextTemplate([
    appThemeCreator(Theme.DARK),
    textCreator('text'),
]);
export const ErrorDark = createTextTemplate([
    themeCreator(TextTheme.ERROR),
    appThemeCreator(Theme.DARK),
    textCreator('text'),
]);
export const DisabledDark = createTextTemplate([
    themeCreator(TextTheme.DISABLED),
    appThemeCreator(Theme.DARK),
    textCreator('text'),
]);
