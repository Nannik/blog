import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejectedValue> =
    (args: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    readonly dispatch: jest.MockedFn<any>;

    readonly getState: () => StateSchema;

    readonly actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;

        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}
