import { ComponentMeta } from '@storybook/react';

import { Select, SelectOption } from './Select';
import { createTemplate, TemplateCreator, TemplateProxy } from '@/shared/lib';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

type SelectTemplateCreator<T> = TemplateCreator<T, typeof Select>;

const optionsCreator: SelectTemplateCreator<SelectOption[]> = (options) => (template) => {
    if (!template.args) template.args = {};
    template.args.options = options;

    return template;
};

const labelCreator: SelectTemplateCreator<string> = (label) => (template) => {
    if (!template.args) template.args = {};
    template.args.label = label;

    return template;
};

const createSelectTemplate = (templateProxies: TemplateProxy<typeof Select>[]) => (
    createTemplate(templateProxies, Select)
);

export const WithLabel = createSelectTemplate([
    labelCreator('test label'),
    optionsCreator([
        { content: '1', value: '1' },
        { content: '2', value: '2' },
        { content: '3', value: '3' },
    ]),
]);

export const WithoutLabel = createSelectTemplate([
    optionsCreator([
        { content: '1', value: '1' },
        { content: '2', value: '2' },
        { content: '3', value: '3' },
    ]),
]);
