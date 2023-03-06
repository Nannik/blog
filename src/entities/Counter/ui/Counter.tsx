import { useDispatch, useSelector } from 'react-redux';
import { memo } from 'react';
import { Button } from '@/shared/ui';
import { counterActions } from '@/entities/Counter';
import { getCounterValue } from '@/entities/Counter/model/selectors/getCounterValue/getCounterValue';

const Counter = memo(() => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div data-testid="counter">
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <h4 data-testid="counter-value-title">
                value =
                {' '}
                {value}
            </h4>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button data-testid="counter-increment-btn" onClick={ increment }>
                increment
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button data-testid="counter-decrement-btn" onClick={ decrement }>
                decrement
            </Button>
        </div>
    );
});

export {
    Counter,
};
