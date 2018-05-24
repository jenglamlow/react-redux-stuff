import {
  REQUEST_STUFF,
} from './types';

export function requestStuff(param) {
  return {
    type: REQUEST_STUFF,
    param
  };
}