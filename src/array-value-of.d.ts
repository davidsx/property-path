import { ArrayPathOf } from './array-path-of';

export type ArrayValueOf<T, P extends ArrayPathOf<T>> = P extends `[${infer I}]${infer Rest}`
    ? I extends `${number}`
        ? T extends (infer S)[] | undefined
            ? Rest extends ''
                ? S extends any[] | undefined
                    ? S
                    : never
                : Rest extends `.${infer K}`
                ? K extends ArrayPathOf<S>
                    ? ArrayValueOf<S, K>
                    : never
                : Rest extends ArrayPathOf<S>
                ? ArrayValueOf<S, Rest>
                : never
            : never
        : never
    : P extends `${infer K}[${infer I}]${infer Rest}`
    ? K extends keyof T
        ? `[${I}]${Rest}` extends ArrayPathOf<T[K]>
            ? ArrayValueOf<T[K], `[${I}]${Rest}`>
            : never
        : never
    : P extends `${infer K}.${infer Rest}`
    ? K extends keyof T
        ? Rest extends ArrayPathOf<T[K]>
            ? ArrayValueOf<T[K], Rest>
            : never
        : never
    : P extends keyof T
    ? T[P] extends any[] | undefined
        ? T[P]
        : never
    : never;
