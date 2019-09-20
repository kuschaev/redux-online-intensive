import { put, apply } from 'redux-saga/effects';
import { postsActions } from './../../actions';
import { api } from '../../../../REST';

export function* createPost ({ payload: post }) {
    try {
        const response = yield apply(api, api.posts.create, [post]);
        const { data, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(postsActions.createPost(data));
    } catch (error) {
        console.log('createPost worker error', error);
    }
}
