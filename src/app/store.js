import {configureStore} from '@reduxjs/toolkit';
import countersSlice from '../features/counters/countersSlice.js';
import postsSlice from '../features/posts/postsSlice.js';

const store = configureStore({
  reducer: {
    counters: countersSlice,
    posts: postsSlice
  }
})
export default store
