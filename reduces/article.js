'use strict';

import * as types from '../constants/ActionTypes'

const initialState = {
    articles: []
};

function addArticle(state) {
    return [...state, {
        ArticleId: Math.floor(Math.random() * 0xFFFF),
        title: '',
        thumbMediaId: '',
        author: '',
        digest: '',
        showCoverPic: false,
        content: '',
        contentSourceUrl: ''

    }];
}

function deleteArticle(state, articleIdx) {
    state.splice(articleIdx, 1);
    return [...state];
}
function onEditing(state, editingIdx) {
    state.onEditing = editingIdx;
    return [...state];
}

export default function article(state = initialState, action = undefined) {
    switch (action.type) {
        case types.ADD_ARTICLE:
            return {
                articles: addArticle(state.articles)
            };
        case types.DELETE_ARTICLE:
            return {
                articles: deleteArticle(state.articles, action.articleIdx)
            };
        case types.ON_EDITING:
            return {
                articles: onEditing(state.articles, action.editingIdx)
            };
        default:
            return state;
    }
}