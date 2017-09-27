import initialState from './initialState';
import { FETCH, RECIEVE } from '../actions/actionTypes';

export default function wedding(state = initialState.wedding, action) {
  let newState;
  switch(action.type) {
    case FETCH:
      console.log('FETCH Action (mock)');
      return action;
    case RECIEVE:
      // JSON object `wedding`
      newState = action.wedding;
      console.log('RECIEVE Action (mock)');
      return newState;
    default:
      return state;
  }
}