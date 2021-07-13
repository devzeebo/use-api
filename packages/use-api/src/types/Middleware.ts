export type Middleware<T> = (config: T) => Promise<T>;
