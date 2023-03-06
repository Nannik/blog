import { DeepPartial } from '@reduxjs/toolkit';
import { TemplateCreator } from '@/shared/lib';
import { Theme } from '@/shared/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StateSchema } from '@/app/providers/StoreProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export const appThemeCreator: TemplateCreator<Theme, any> = (theme) => (template) => {
    if (!template.decorators) template.decorators = [];
    template.decorators.push(ThemeDecorator(theme));

    return template;
};

export const storeCreator: TemplateCreator<DeepPartial<StateSchema>, any> = (state) => (template) => {
    if (!template.decorators) template.decorators = [];
    template.decorators.push(StoreDecorator(state));

    return template;
};
