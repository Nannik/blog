import { ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';
import { createTemplate, TemplateCreator, TemplateProxy } from '@/shared/lib';
import AvatarImg from '../../assets/tests/avatar_img.png';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        src: AvatarImg,
    },
} as ComponentMeta<typeof Avatar>;

type AvatarTemplateCreator<T> = TemplateCreator<T, typeof Avatar>;

const sizeCreator: AvatarTemplateCreator<number> = (size) => (template) => {
    if (!template.args) template.args = {};
    template.args.size = size;

    return template;
};

const createAvatarTemplate = (templateProxies: TemplateProxy<typeof Avatar>[]) => (
    createTemplate(templateProxies, Avatar)
);

export const Small = createAvatarTemplate([
    sizeCreator(50),
]);

export const Medium = createAvatarTemplate([
    sizeCreator(100),
]);

export const Big = createAvatarTemplate([
    sizeCreator(150),
]);
