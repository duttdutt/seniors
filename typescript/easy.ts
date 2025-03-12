/* ===== Pick ===== */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/* ===== ReadOnly ===== */
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

/* ===== TupleToObject ===== */
type TupleToObject<
  T extends readonly PropertyKey[]
> = {
  [P in T[number]]: P;
}

/* ===== First of Array ===== */
type First<T extends unknown[]> =
  T extends never[]
    ? never
    : T[0]

/* ===== Length of Tuple ===== */
type Length<T extends readonly any[]> = T['length']