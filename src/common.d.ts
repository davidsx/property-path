export type RemoveLeading<T extends string, L extends string> = T extends `${L}${infer R}` ? R : T;
export type AllowedKeyOf<T> = Exclude<keyof T, symbol | Exclude<keyof any[], number> | keyof Date>;
