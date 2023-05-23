import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { StateSchema } from '@/app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejectedValue> =
    (args: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>;

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    readonly dispatch: jest.MockedFn<any>;

    readonly navigate: jest.MockedFn<any>;

    readonly getState: () => StateSchema;

    readonly actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    readonly api: jest.MockedFunctionDeep<AxiosStatic>;

    constructor(
        actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
        state?: DeepPartial<StateSchema>,
    ) {
        this.actionCreator = actionCreator;

        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);
        this.navigate = jest.fn();
        this.api = mockedAxios;
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(
            this.dispatch,
            this.getState,
            {
                api: this.api,
                navigate: this.navigate,
            },
        );

        return result;
    }
}
