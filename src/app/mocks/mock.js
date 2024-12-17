import MockAdapter from 'axios-mock-adapter';
import { axiosInstance } from './axiosInstance';

export const mock = new MockAdapter(axiosInstance);

mock.onAny('/api/checking').reply((config) => {
  const requestData = JSON.parse(config.data);
  if (requestData.language && requestData.code && !requestData.code.includes('//')) {
    return [
      200,
      {
        status: 'success',
        result: 'Hello, world!\n'
      }
    ];
  } else {
    return [
      200,
      {
        status: 'error',
        result: 'Invalid input ("//")'
      }
    ];
  }
});
