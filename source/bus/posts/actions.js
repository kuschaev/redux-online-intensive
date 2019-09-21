import { types } from './types';

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

    fetchPostsAsync: () => {
        return {
            type: types.FETCH_POSTS_ASYNC,
        };
    },

    createPostAsync: (post) => {
        return {
            type:    types.CREATE_POST_ASYNC,
            payload: post,
        };
    },
};
