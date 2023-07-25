import { ComponentMeta } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';
import { appThemeCreator } from '@/shared/lib/helpers/storybook/storiesTemplateCreators';
import {
    createTemplate, TemplateCreator, TemplateProxy,
} from '@/shared/lib/helpers/storybook/createTemplate';
import { Theme } from '@/shared/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Text',
    },
} as ComponentMeta<typeof Button>;

type ButtonTemplateCreator<T> = TemplateCreator<T, typeof Button>;

const sizeCreator: ButtonTemplateCreator<ButtonSize> = (size) => (template) => {
    if (!template.args) template.args = {};
    template.args.square = true;
    template.args.size = size;

    return template;
};

const themeCreator: ButtonTemplateCreator<ButtonTheme> = (theme) => (template) => {
    if (!template.args) template.args = {};
    template.args.theme = theme;

    return template;
};

const disabledCreator: ButtonTemplateCreator<boolean> = (disabled) => (template) => {
    if (!template.args) template.args = {};
    template.args.disabled = disabled;

    return template;
};

const createButtonTemplate = (templateProxies: TemplateProxy<typeof Button>[]) => (
    createTemplate<typeof Button>(templateProxies, Button)
);

// <editor-fold desc="CLEAR">
export const ClearLight = createButtonTemplate([
    themeCreator(ButtonTheme.CLEAR),
    appThemeCreator(Theme.LIGHT),
]);

export const ClearDark = createButtonTemplate([
    themeCreator(ButtonTheme.CLEAR),
    appThemeCreator(Theme.DARK),
]);

export const ClearMediumLight = createButtonTemplate([
    themeCreator(ButtonTheme.CLEAR),
    sizeCreator(ButtonSize.MEDIUM),
    appThemeCreator(Theme.LIGHT),
]);

export const ClearLargeLight = createButtonTemplate([
    themeCreator(ButtonTheme.CLEAR),
    sizeCreator(ButtonSize.LARGE),
    appThemeCreator(Theme.LIGHT),
]);

export const ClearExtraLargeLight = createButtonTemplate([
    themeCreator(ButtonTheme.CLEAR),
    sizeCreator(ButtonSize.EXTRA_LARGE),
    appThemeCreator(Theme.LIGHT),
]);

export const ClearMediumDark = createButtonTemplate([
    themeCreator(ButtonTheme.CLEAR),
    sizeCreator(ButtonSize.MEDIUM),
    appThemeCreator(Theme.DARK),
]);

export const ClearLargeDark = createButtonTemplate([
    themeCreator(ButtonTheme.CLEAR),
    sizeCreator(ButtonSize.LARGE),
    appThemeCreator(Theme.DARK),
]);

export const ClearExtraLargeDark = createButtonTemplate([
    themeCreator(ButtonTheme.CLEAR),
    sizeCreator(ButtonSize.EXTRA_LARGE),
    appThemeCreator(Theme.DARK),
]);
// </editor-fold>

// <editor-fold desc="CLEAR-INVERTED">
export const ClearInvertedLight = createButtonTemplate([
    themeCreator(ButtonTheme.CLEAR_INVERTED),
    appThemeCreator(Theme.LIGHT),
]);

export const ClearInvertedDark = createButtonTemplate([
    themeCreator(ButtonTheme.CLEAR_INVERTED),
    appThemeCreator(Theme.DARK),
]);

export const ClearInvertedMediumLight = createButtonTemplate([
    themeCreator(ButtonTheme.CLEAR_INVERTED),
    sizeCreator(ButtonSize.MEDIUM),
    appThemeCreator(Theme.LIGHT),
]);

export const ClearInvertedLargeLight = createButtonTemplate([
    themeCreator(ButtonTheme.CLEAR_INVERTED),
    sizeCreator(ButtonSize.LARGE),
    appThemeCreator(Theme.LIGHT),
]);

export const ClearInvertedExtraLargeLight = createButtonTemplate([
    themeCreator(ButtonTheme.CLEAR_INVERTED),
    sizeCreator(ButtonSize.EXTRA_LARGE),
    appThemeCreator(Theme.LIGHT),
]);

export const ClearInvertedMediumDark = createButtonTemplate([
    themeCreator(ButtonTheme.CLEAR_INVERTED),
    sizeCreator(ButtonSize.MEDIUM),
    appThemeCreator(Theme.DARK),
]);

export const ClearInvertedLargeDark = createButtonTemplate([
    themeCreator(ButtonTheme.CLEAR_INVERTED),
    sizeCreator(ButtonSize.LARGE),
    appThemeCreator(Theme.DARK),
]);

export const ClearInvertedExtraLargeDark = createButtonTemplate([
    themeCreator(ButtonTheme.CLEAR_INVERTED),
    sizeCreator(ButtonSize.EXTRA_LARGE),
    appThemeCreator(Theme.DARK),
]);
// </editor-fold>

// <editor-fold desc="OUTLINE">
export const OutlineLight = createButtonTemplate([
    themeCreator(ButtonTheme.OUTLINE),
    appThemeCreator(Theme.LIGHT),
]);

export const OutlineLightDisabled = createButtonTemplate([
    disabledCreator(true),
    themeCreator(ButtonTheme.OUTLINE),
    appThemeCreator(Theme.LIGHT),
]);

export const OutlineDark = createButtonTemplate([
    themeCreator(ButtonTheme.OUTLINE),
    appThemeCreator(Theme.DARK),
]);

export const OutlineMediumLight = createButtonTemplate([
    themeCreator(ButtonTheme.OUTLINE),
    sizeCreator(ButtonSize.MEDIUM),
    appThemeCreator(Theme.LIGHT),
]);

export const OutlineLargeLight = createButtonTemplate([
    themeCreator(ButtonTheme.OUTLINE),
    sizeCreator(ButtonSize.LARGE),
    appThemeCreator(Theme.LIGHT),
]);

export const OutlineExtraLargeLight = createButtonTemplate([
    themeCreator(ButtonTheme.OUTLINE),
    sizeCreator(ButtonSize.EXTRA_LARGE),
    appThemeCreator(Theme.LIGHT),
]);

export const OutlineMediumDark = createButtonTemplate([
    themeCreator(ButtonTheme.OUTLINE),
    sizeCreator(ButtonSize.MEDIUM),
    appThemeCreator(Theme.DARK),
]);

export const OutlineLargeDark = createButtonTemplate([
    themeCreator(ButtonTheme.OUTLINE),
    sizeCreator(ButtonSize.LARGE),
    appThemeCreator(Theme.DARK),
]);

export const OutlineExtraLargeDark = createButtonTemplate([
    themeCreator(ButtonTheme.OUTLINE),
    sizeCreator(ButtonSize.EXTRA_LARGE),
    appThemeCreator(Theme.DARK),
]);
// </editor-fold>

// <editor-fold desc="OUTLINE_RED">
export const OutlineRedLight = createButtonTemplate([
    themeCreator(ButtonTheme.OUTLINE_RED),
    appThemeCreator(Theme.LIGHT),
]);

export const OutlineRedLightDisabled = createButtonTemplate([
    disabledCreator(true),
    themeCreator(ButtonTheme.OUTLINE_RED),
    appThemeCreator(Theme.LIGHT),
]);

export const OutlineRedDark = createButtonTemplate([
    themeCreator(ButtonTheme.OUTLINE_RED),
    appThemeCreator(Theme.DARK),
]);

export const OutlineRedMediumLight = createButtonTemplate([
    themeCreator(ButtonTheme.OUTLINE_RED),
    sizeCreator(ButtonSize.MEDIUM),
    appThemeCreator(Theme.LIGHT),
]);

export const OutlineRedLargeLight = createButtonTemplate([
    themeCreator(ButtonTheme.OUTLINE_RED),
    sizeCreator(ButtonSize.LARGE),
    appThemeCreator(Theme.LIGHT),
]);

export const OutlineRedExtraLargeLight = createButtonTemplate([
    themeCreator(ButtonTheme.OUTLINE_RED),
    sizeCreator(ButtonSize.EXTRA_LARGE),
    appThemeCreator(Theme.LIGHT),
]);

export const OutlineRedMediumDark = createButtonTemplate([
    themeCreator(ButtonTheme.OUTLINE_RED),
    sizeCreator(ButtonSize.MEDIUM),
    appThemeCreator(Theme.DARK),
]);

export const OutlineRedLargeDark = createButtonTemplate([
    themeCreator(ButtonTheme.OUTLINE_RED),
    sizeCreator(ButtonSize.LARGE),
    appThemeCreator(Theme.DARK),
]);

export const OutlineRedExtraLargeDark = createButtonTemplate([
    themeCreator(ButtonTheme.OUTLINE_RED),
    sizeCreator(ButtonSize.EXTRA_LARGE),
    appThemeCreator(Theme.DARK),
]);
// </editor-fold>

// <editor-fold desc="BACKGROUND">
export const BackgroundLight = createButtonTemplate([
    themeCreator(ButtonTheme.BACKGROUND),
    appThemeCreator(Theme.LIGHT),
]);

export const BackgroundDark = createButtonTemplate([
    themeCreator(ButtonTheme.BACKGROUND),
    appThemeCreator(Theme.DARK),
]);

export const BackgroundMediumLight = createButtonTemplate([
    themeCreator(ButtonTheme.BACKGROUND),
    sizeCreator(ButtonSize.MEDIUM),
    appThemeCreator(Theme.LIGHT),
]);

export const BackgroundLargeLight = createButtonTemplate([
    themeCreator(ButtonTheme.BACKGROUND),
    sizeCreator(ButtonSize.LARGE),
    appThemeCreator(Theme.LIGHT),
]);

export const BackgroundExtraLargeLight = createButtonTemplate([
    themeCreator(ButtonTheme.BACKGROUND),
    sizeCreator(ButtonSize.EXTRA_LARGE),
    appThemeCreator(Theme.LIGHT),
]);

export const BackgroundMediumDark = createButtonTemplate([
    themeCreator(ButtonTheme.BACKGROUND),
    sizeCreator(ButtonSize.MEDIUM),
    appThemeCreator(Theme.DARK),
]);

export const BackgroundLargeDark = createButtonTemplate([
    themeCreator(ButtonTheme.BACKGROUND),
    sizeCreator(ButtonSize.LARGE),
    appThemeCreator(Theme.DARK),
]);

export const BackgroundExtraLargeDark = createButtonTemplate([
    themeCreator(ButtonTheme.BACKGROUND),
    sizeCreator(ButtonSize.EXTRA_LARGE),
    appThemeCreator(Theme.DARK),
]);
// </editor-fold>

// <editor-fold desc="BACKGROUND_INVERTED">
export const BackgroundInvertedLight = createButtonTemplate([
    themeCreator(ButtonTheme.BACKGROUND_INVERTED),
    appThemeCreator(Theme.LIGHT),
]);

export const BackgroundInvertedDark = createButtonTemplate([
    themeCreator(ButtonTheme.BACKGROUND_INVERTED),
    appThemeCreator(Theme.DARK),
]);

export const BackgroundInvertedMediumLight = createButtonTemplate([
    themeCreator(ButtonTheme.BACKGROUND_INVERTED),
    sizeCreator(ButtonSize.MEDIUM),
    appThemeCreator(Theme.LIGHT),
]);

export const BackgroundInvertedLargeLight = createButtonTemplate([
    themeCreator(ButtonTheme.BACKGROUND_INVERTED),
    sizeCreator(ButtonSize.LARGE),
    appThemeCreator(Theme.LIGHT),
]);

export const BackgroundInvertedExtraLargeLight = createButtonTemplate([
    themeCreator(ButtonTheme.BACKGROUND_INVERTED),
    sizeCreator(ButtonSize.EXTRA_LARGE),
    appThemeCreator(Theme.LIGHT),
]);

export const BackgroundInvertedMediumDark = createButtonTemplate([
    themeCreator(ButtonTheme.BACKGROUND_INVERTED),
    sizeCreator(ButtonSize.MEDIUM),
    appThemeCreator(Theme.DARK),
]);

export const BackgroundInvertedLargeDark = createButtonTemplate([
    themeCreator(ButtonTheme.BACKGROUND_INVERTED),
    sizeCreator(ButtonSize.LARGE),
    appThemeCreator(Theme.DARK),
]);

export const BackgroundInvertedExtraLargeDark = createButtonTemplate([
    themeCreator(ButtonTheme.BACKGROUND_INVERTED),
    sizeCreator(ButtonSize.EXTRA_LARGE),
    appThemeCreator(Theme.DARK),
]);
// </editor-fold>
