import { FETCH_POSTS_ASYNC, LOAD_POSTS } from './types';
import { api } from "./../../REST/api";

export const loadPosts = (posts) => {
    return {
        type:    LOAD_POSTS,
        payload: posts,
    };

};

export const fetchPostsAsync = () => async (dispatch, getState) => {
    dispatch({
        type: FETCH_POSTS_ASYNC,
    });

    const response = await api.posts.fetch();
    const result = await response.json();

    dispatch(loadPosts(result.data));
};
