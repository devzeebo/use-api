import isEmpty from 'lodash/fp/isEmpty';

import { Middleware } from '../../types/Middleware';

const reduceMiddlewares = <T>(middlewares: Middleware<T>[], config: T): Promise<T> => {
  if (isEmpty(middlewares)) {
    return Promise.resolve(config);
  }

  const [next, ...rest] = middlewares;

  return next(config).then((nextConfig: T) => (
    reduceMiddlewares(rest, nextConfig)
  ));
};

export default reduceMiddlewares;
