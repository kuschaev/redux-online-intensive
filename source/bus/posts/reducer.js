import { fromJS, List } from 'immutable';

import { LOAD_POSTS, CREATE_POST } from './types';

const initialState = List();

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return fromJS(action.payload);

        case CREATE_POST:
            return state.unshift(fromJS(action.payload));

        default:
            return state;
    }
};
