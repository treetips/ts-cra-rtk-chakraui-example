/**
 * Converting an associative array value to a type
 * @author treetips
 *
 * @example
 * const Hoges = {
 *   fuga: "primary",
 *   piyo: "secondary"
 * } as const;
 *
 * type hogeType = ValueType<typeof Hoges>;
 */
export type ValueType<T> = T extends { [K in keyof T]: infer U } ? U : never;
