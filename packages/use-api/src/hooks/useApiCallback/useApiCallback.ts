import {
  useCallback,
} from 'react';
import mergeAll from 'lodash/fp/mergeAll';
import {
  Middleware,
} from '../../types/Middleware';
import reduceMiddlewares from './_reduceMiddlewareConfig';

export type UseApiCallback<T, TData> = (config?: T) => Promise<TData>;

export default <T, TData>(
  handler: (config: T) => Promise<TData>,
  baseConfig: T,
  middleware: Middleware<T>[] = [],
): UseApiCallback<T, TData> => {
  const callback = useCallback(
    (requestConfig?: T) => {
      const mergedConfig = mergeAll([
        baseConfig,
        requestConfig,
      ]);

      return reduceMiddlewares(middleware, mergedConfig)
        .then(handler);
    },
    [baseConfig, handler, middleware],
  );

  return callback;
};
