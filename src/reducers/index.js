import { combineReducers } from 'redux';
import PostsReducer from './post_reducer';

const rootReducer = combineReducers({
  books: PostsReducer
});

export default rootReducer;
