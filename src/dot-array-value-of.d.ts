import { DotArrayPathOf } from './dot-array-path-of';

export type DotArrayValueOf<T, P extends DotArrayPathOf<T>> = P extends `${infer K}.${infer Rest}`
    ? K extends keyof T
        ? Rest extends DotArrayPathOf<T[K]>
            ? DotArrayValueOf<T[K], Rest>
            : never
        : T extends any[]
        ? K extends `${number}`
            ? Rest extends DotArrayPathOf<T[number]>
                ? DotArrayValueOf<T[number], Rest>
                : never
            : never
        : never
    : P extends keyof T
    ? T[P] extends any[] | undefined
        ? T[P]
        : never
    : T extends any[]
    ? P extends `${number}`
        ? T[number] extends any[] | undefined
            ? T[number]
            : never
        : never
    : never;
