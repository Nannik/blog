import { TemplateCreator } from '@/shared/lib';
import { Theme } from '@/shared/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

export const appThemeCreator: TemplateCreator<Theme, any> = (theme) => (template) => {
    if (!template.decorators) template.decorators = [];
    template.decorators.push(ThemeDecorator(theme));

    return template;
};
