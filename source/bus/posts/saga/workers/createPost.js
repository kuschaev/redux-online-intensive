import { put, apply } from 'redux-saga/effects';
import { createPost as createPostAction } from './../../actions';
import { api } from '../../../../REST';

export function* createPost ({ payload: post }) {
    const response = yield apply(api, api.posts.create, [post]);
    const result = yield apply(response, response.json);

    yield put(createPostAction(result.data));
}
