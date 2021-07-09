import {
  useState,
  useEffect,
} from 'react';

export default <T>(request: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(
    () => {
      let mounted = true;

      request()
        .then(
          (result) => {
            if (mounted) {
              setData(result);
              setLoading(false);
            }
          },
          (requestError) => {
            if (mounted) {
              setError(requestError);
              setLoading(false);
            }
          },
        );

      return () => { mounted = false; };
    },
    [request],
  );

  return [data, error, loading];
};
