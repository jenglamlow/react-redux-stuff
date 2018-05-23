import {
  REQUEST_STUFF,
} from '../actions/types';

const initialState = {
  requestedStuff: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_STUFF:
      return {
        ...state,
        requestedStuff: true
      }
    default:
      return state;
  }
}