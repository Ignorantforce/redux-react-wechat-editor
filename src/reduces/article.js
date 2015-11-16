'use strict';

import * as types from '../constants/ActionTypes'

const initialState = {
    articles: []
};

function addArticle(state) {
    return [...state, {
        title: '',
        thumbMediaId: '',
        author: '',
        digest: '',
        showCoverPic: false,
        content: '',
        contentSourceUrl: ''
    }];
}

export default function article(state = initialState, action = undefined) {
    switch (action.type) {
        case types.ADD_ARTICLE:
            return {
                articles: addArticle(state.articles)
            };
        default:
            return state;
    }
}