import { setupWorker } from 'msw';

import get from './api/get';

const worker = setupWorker(
  get,
);

worker.start().then(() => {
  console.log('worker started');
});
