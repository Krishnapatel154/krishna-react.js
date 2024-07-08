
import { createStore, combineReducers } from 'redux';
import counterReducer from './CounterReducer';
import themeReducer from './ThemeReducerx';

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
});

const Store = createStore(rootReducer);

export default Store;
