import { rest } from 'msw';

export default rest.get(
  'http://some.domain/api/request',
  (req, res, ctx) => {
    const apiConfig = JSON.parse(localStorage.getItem('request') || '{}');

    if (apiConfig.get.status === 200) {
      return res(ctx.json(apiConfig.get.result));
    }

    return res(ctx.status(apiConfig.get.status || 500));
  },
);
