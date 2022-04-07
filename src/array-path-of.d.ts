import { AllowedKeyOf, RemoveLeading } from './common';

export type ArrayKeyOf<T> = T extends Record<string, any>
    ? {
          [S in AllowedKeyOf<T>]: T extends any[]
              ? T[number] extends any[]
                  ? T[number][number] extends Record<string, any>
                      ? `[${number}]` | `[${number}]${ArrayKeyOf<T[number]>}`
                      : `[${number}]`
                  : T[number] extends Record<string, any>
                  ? `[${number}]${ArrayKeyOf<T[S]>}`
                  : never
              : T[S] extends any[]
              ? T[S][number] extends any[]
                  ? `.${S}` | `.${S}[${number}]` | `.${S}[${number}]${ArrayKeyOf<T[S][number]>}`
                  : T[S][number] extends Record<string, any>
                  ? `.${S}` | `.${S}[${number}]${ArrayKeyOf<T[S][number]>}`
                  : `.${S}`
              : T[S] extends Record<string, any>
              ? `.${S}${ArrayKeyOf<T[S]>}`
              : never;
      }[AllowedKeyOf<T>]
    : never;
export type ArrayPathOf<T> = Exclude<RemoveLeading<ArrayKeyOf<T>, '.'>, ''>;
