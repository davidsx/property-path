import { PathOf } from './path-of';

export type ValueOf<T, P extends PathOf<T>> = P extends `[${infer I}]${infer Rest}`
    ? T extends (infer S)[] | undefined
        ? I extends `${number}`
            ? Rest extends ''
                ? S
                : Rest extends `.${infer K}`
                ? K extends PathOf<S>
                    ? ValueOf<S, K>
                    : never
                : Rest extends PathOf<S>
                ? ValueOf<S, Rest>
                : never
            : never
        : never
    : P extends `${infer K}[${infer I}]${infer Rest}`
    ? K extends keyof T
        ? `[${I}]${Rest}` extends PathOf<T[K]>
            ? ValueOf<T[K], `[${I}]${Rest}`>
            : never
        : never
    : P extends `${infer K}.${infer Rest}`
    ? K extends keyof T
        ? Rest extends PathOf<T[K]>
            ? ValueOf<T[K], Rest>
            : never
        : never
    : P extends keyof T
    ? T[P]
    : never;
