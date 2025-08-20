/**
 * Utility functions for creating enum-like objects
 */

export function EnumLike<T extends string>(...keys: readonly T[]): { [K in T]: K };
export function EnumLike<T extends readonly unknown[] | Record<PropertyKey, unknown>>(
  input: T,
): {
  [K in T extends readonly (infer E)[] ? (E extends PropertyKey ? E : never) : keyof T]: K;
};
export function EnumLike<T extends object>(param: T | (keyof T)[]): { [K in keyof T]: K } {
  if (Array.isArray(param)) {
    return Object.fromEntries(param.map((key) => [key, key])) as { [K in keyof T]: K };
  } else {
    return Object.fromEntries(Object.keys(param).map((key) => [key, key])) as { [K in keyof T]: K };
  }
}
