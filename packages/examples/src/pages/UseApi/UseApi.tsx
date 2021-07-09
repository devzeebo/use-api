import React, {
  useState,
  useEffect,
} from 'react';

import {
  flow,
  get,
} from 'lodash/fp';

import { useApiCallback } from '@use-api/axios';

const UseApi = () => {
  const [data, setData] = useState(null);
  const callback = useApiCallback({
    url: 'http://some.domain/api/request',
  });

  useEffect(
    () => {
      callback().then(flow(
        get('data'),
        setData,
      ));
    },
    [callback],
  );

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
};

export default UseApi;
