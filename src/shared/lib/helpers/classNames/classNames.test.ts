import { classNames } from '@/shared/lib/helpers/classNames/classNames';

describe('classNames', () => {
    test('with one param', () => {
        expect(classNames('testClass')).toBe('testClass');
    });

    test('with additional param', () => {
        const classname = classNames('testClass', {}, [ 'add1', 'add2' ]);
        const expected = 'testClass add1 add2';

        expect(classname).toBe(expected);
    });

    test('with one mod', () => {
        const classname = classNames('testClass', { mod1: true });
        const expected = 'testClass mod1';

        expect(classname).toBe(expected);
    });

    test('with mods', () => {
        const classname = classNames('testClass', { mod1: true, mod2: false });
        const expected = 'testClass mod1';

        expect(classname).toBe(expected);
    });

    test('with mods and additional', () => {
        const classname = classNames('testClass', { mod1: true, mod2: false }, [ 'add1', 'add2' ]);
        const expected = 'testClass add1 add2 mod1';

        expect(classname).toBe(expected);
    });
});
