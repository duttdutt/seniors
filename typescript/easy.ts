/* ===== 1. Pick ===== */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/* ===== 2. ReadOnly ===== */
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

/* ===== 3. TupleToObject ===== */
type TupleToObject<
  T extends readonly PropertyKey[]
> = {
  [P in T[number]]: P;
}

/* ===== 3. First of Array ===== */
type First<T extends unknown[]> =
  T extends never[]
    ? never
    : T[0]

/* ===== 4. Length of Tuple ===== */
type Length<T extends readonly any[]> = T['length']