import { CancelToken } from 'axios';
import { CANCEL } from 'redux-saga';
import request from '../utils/request';

export function getPost() {
  const source = CancelToken.source();
  const r = request({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'get',
    cancelToken: source.token,
  });
  r[CANCEL] = () => source.cancel();
  return r;
}

export function downloadFile() {
  // const source = CancelToken.source();
  const r = request({
    url: 'http://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_640_3MG.mp4',
    method: 'get',
    responseType: 'blob',
    // cancelToken: source.token,
  });
  // r[CANCEL] = () => source.cancel();
  return r;
}