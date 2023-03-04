import React, { JSXElementConstructor } from 'react';
import { ComponentStory } from '@storybook/react';

export type TemplateProxy
    <T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> =
    (template: ComponentStory<T>) => ComponentStory<T>;

export type TemplateCreator
    <T, K extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> =
    (value: T) => TemplateProxy<K>;

export const createTemplate = <T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>>
    (templateProxies: TemplateProxy<T>[], Component: any): ComponentStory<T> => {
    let Template: ComponentStory<any> = (args) => <Component { ...args } />;

    for (let i = 0; i < templateProxies.length; i++) {
        const templateCreator = templateProxies[i];
        Template = templateCreator(Template);
    }

    return Template;
};
