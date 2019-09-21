import { put, apply } from 'redux-saga/effects';
import { uiActions } from '../../../ui/actions';
import { postsActions } from '../../actions';
import { api } from '../../../../REST';

export function* loadPosts () {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.posts.fetch);
        const { data, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(postsActions.loadPosts(data));
    } catch (error) {
        yield put(uiActions.emitError(error, 'loadPosts worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
