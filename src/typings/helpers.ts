export type TMaybe<T> = null | undefined | T;

export type TWritable<T> = { -readonly [P in keyof T]: T[P] };
