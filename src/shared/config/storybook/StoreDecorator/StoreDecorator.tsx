import { Story } from '@storybook/react';
import { StoreProvider, StateSchema } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUserName/model/slice/loginSlice';
import { ReducersList } from '@/shared/lib/component/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={ state }
        asyncReducers={ defaultAsyncReducers }
    >
        <StoryComponent />
    </StoreProvider>
);
