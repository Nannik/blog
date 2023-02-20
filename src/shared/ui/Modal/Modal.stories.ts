import { ComponentMeta } from '@storybook/react';

import {
    appThemeCreator, createTemplate, TemplateProxy,
} from '@/shared/lib';
import { Theme } from '@/shared/theme';
import { Modal } from '@/shared/ui';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolore nesciunt qui quis similique voluptatibus voluptatum? Ad assumenda consequatur deleniti dicta distinctio, explicabo, id illum iusto magnam minus molestias repellat?',
        isOpen: true,
    },
} as ComponentMeta<typeof Modal>;

const createModalTemplate = (templateProxies: TemplateProxy<typeof Modal>[]) => (
    createTemplate<typeof Modal>(templateProxies, Modal)
);

export const Light = createModalTemplate([
    appThemeCreator(Theme.LIGHT),
]);

export const Dark = createModalTemplate([
    appThemeCreator(Theme.DARK),
]);
