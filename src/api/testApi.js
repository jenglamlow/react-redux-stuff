import { CancelToken } from 'axios';
import { CANCEL } from 'redux-saga';
import request from '../utils/request';

export function requestStuff() {
  const source = CancelToken.source();
  const r = request({
    url: 'https://jsonplaceholder.typicode.com/photos',
    method: 'get',
    cancelToken: source.token,
  });
  r[CANCEL] = () => source.cancel();
  return r;
}

export function longRequest() {
  const source = CancelToken.source();
  const r = request({
    url: 'http://slowwly.robertomurray.co.uk/delay/3000/url/http://www.google.co.uk',
    method: 'get',
    responseType: 'blob',
    cancelToken: source.token,
  });
  r[CANCEL] = () => source.cancel();
  return r;
}
