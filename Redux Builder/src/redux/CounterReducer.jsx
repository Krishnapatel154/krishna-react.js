
import { ADD, REDUCE } from '../redux/Action';

const initialState = 0;

const CounterReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD:
      return state + action.payload;
    case REDUCE:
      return state - action.payload;
    default:
      return state;
  }
};

export default CounterReducer;
