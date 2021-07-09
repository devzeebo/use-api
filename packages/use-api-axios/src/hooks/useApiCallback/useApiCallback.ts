import { useApiCallback } from '@use-api/core';
import axios from 'axios';

// eslint-disable-next-line react-hooks/rules-of-hooks
export default useApiCallback(axios.request);
