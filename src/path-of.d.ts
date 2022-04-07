import { AllowedKeyOf, RemoveLeading } from './common';

export type KeyOf<T> = T extends Record<string, any>
    ? {
          [S in AllowedKeyOf<T>]: T extends any[] ? `[${number}]` | `[${number}]${KeyOf<T[number]>}` : `.${S}` | `.${S}${KeyOf<T[S]>}`;
      }[AllowedKeyOf<T>]
    : '';
export type PathOf<T> = Exclude<RemoveLeading<KeyOf<T>, '.'>, ''>;
