import { AllowedKeyOf, RemoveLeading } from './common';

export type DotKeyOf<T> = T extends Record<string, any>
    ? {
          [S in AllowedKeyOf<T>]: `.${S}` | `.${S}${DotKeyOf<T[S]>}`;
      }[AllowedKeyOf<T>]
    : '';
export type DotPathOf<T> = Exclude<RemoveLeading<DotKeyOf<T>, '.'>, ''>;
