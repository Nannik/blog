import { ComponentMeta } from '@storybook/react';

import { Input, InputSize } from './Input';
import {
    appThemeCreator, createTemplate, TemplateCreator, TemplateProxy,
} from '@/shared/lib';
import { Theme } from '@/shared/theme';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

type InputTemplateCreator<T> = TemplateCreator<T, typeof Input>;

const sizeCreator: InputTemplateCreator<InputSize> = (size) => (template) => {
    if (!template.args) template.args = {};

    template.args.fontSize = size;

    return template;
};

const createInputTemplate = (templateProxies: TemplateProxy<typeof Input>[]) => (
    createTemplate(templateProxies, Input)
);

export const Medium = createInputTemplate([ appThemeCreator(Theme.LIGHT), sizeCreator(InputSize.MEDIUM) ]);
export const MediumDark = createInputTemplate([ appThemeCreator(Theme.DARK), sizeCreator(InputSize.MEDIUM) ]);

export const Large = createInputTemplate([ appThemeCreator(Theme.LIGHT), sizeCreator(InputSize.LARGE) ]);
export const LargeDark = createInputTemplate([ appThemeCreator(Theme.DARK), sizeCreator(InputSize.LARGE) ]);

export const ExtraLarge = createInputTemplate([ appThemeCreator(Theme.LIGHT), sizeCreator(InputSize.EXTRA_LARGE) ]);
export const ExtraLargeDark = createInputTemplate([ appThemeCreator(Theme.DARK), sizeCreator(InputSize.EXTRA_LARGE) ]);
