import { types } from './types';
import { api } from './../../REST/api';

export const postsActions = {
    loadPosts: (posts) => {
        return {
            type:    types.LOAD_POSTS,
            payload: posts,
        };
    },

    createPost: (post) => {
        return {
            type:    types.CREATE_POST,
            payload: post,
        };
    },

    fetchPostsAsync: () => async (dispatch, getState) => {
        dispatch({
            type: types.FETCH_POSTS_ASYNC,
        });

        const response = await api.posts.fetch();
        const result = await response.json();

        dispatch(postsActions.loadPosts(result.data));
    },

    createPostAsync: (post) => {
        return {
            type:    types.CREATE_POST_ASYNC,
            payload: post,
        };
    },
};
