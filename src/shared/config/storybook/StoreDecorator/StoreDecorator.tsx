import { Story } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { StoreProvider } from '@/app/providers/StoreProvider';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={ state }>
        <StoryComponent />
    </StoreProvider>
);
