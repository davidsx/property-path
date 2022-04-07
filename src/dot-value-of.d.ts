import { DotPathOf } from './dot-path-of';

export type DotValueOf<T, P extends DotPathOf<T>> = P extends `${infer K}.${infer Rest}`
    ? K extends keyof T
        ? Rest extends DotPathOf<T[K]>
            ? DotValueOf<T[K], Rest>
            : never
        : T extends any[]
        ? K extends `${number}`
            ? Rest extends DotPathOf<T[number]>
                ? DotValueOf<T[number], Rest>
                : never
            : never
        : never
    : P extends keyof T
    ? T[P]
    : T extends any[]
    ? P extends `${number}`
        ? T[number]
        : never
    : never;
