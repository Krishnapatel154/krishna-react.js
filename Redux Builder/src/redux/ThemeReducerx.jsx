
import { SWITCH_THEME } from '../redux/Action';

const initialState = 'light';

const ThemeReducer = (state = initialState, action) => {
  switch(action.type) {
    case SWITCH_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default ThemeReducer;
