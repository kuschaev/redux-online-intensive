import { fromJS, List } from 'immutable';

import { LOAD_POSTS } from './types';

const initialState = List();

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return fromJS(action.payload);

        default:
            return state;
    }
};
