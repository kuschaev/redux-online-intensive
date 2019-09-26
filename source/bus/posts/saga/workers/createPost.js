import { put, apply } from 'redux-saga/effects';
import { postsActions } from './../../actions';
import { uiActions } from '../../../ui/actions';
import { api } from '../../../../REST';

export function* createPost ({ payload: post }) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.posts.create, [post]);
        const { data, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(postsActions.createPost(data));
    } catch (error) {
        yield put(uiActions.emitError(error, 'createPost worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}