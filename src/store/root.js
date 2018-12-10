import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { authStore, fetchWallsEpic } from './auth';

export const rootEpic = combineEpics(
  fetchWallsEpic,
);

export const rootReducer = combineReducers({
  authStore,
});
