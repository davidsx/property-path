import { AllowedKeyOf, RemoveLeading } from './common';

export type DotArrayKeyOf<T> = T extends Record<string, any>
    ? {
          [S in AllowedKeyOf<T>]: T[S] extends any[]
              ? T[S] extends Record<string, any>
                  ? `.${S}` | `.${S}${DotArrayKeyOf<T[S]>}`
                  : never
              : T[S] extends Record<string, any>
              ? `.${S}${DotArrayKeyOf<T[S]>}`
              : never;
      }[AllowedKeyOf<T>]
    : never;
export type DotArrayPathOf<T> = Exclude<RemoveLeading<DotArrayKeyOf<T>, '.'>, ''>;
