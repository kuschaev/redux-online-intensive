import { takeEvery, all, call } from 'redux-saga/effects';
import { types } from './../types';
import { createPost, loadPosts } from './workers';

export function* watchCreatePost () {
    yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}

export function* watchLoadPosts () {
    yield takeEvery(types.FETCH_POSTS_ASYNC, loadPosts);
}

const postsWatchers = [call(watchCreatePost), call(watchLoadPosts)];

export function* watchPosts () {
    yield all(postsWatchers);
}
