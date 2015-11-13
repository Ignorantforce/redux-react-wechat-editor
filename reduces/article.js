'use strict';

import * as types from '../constants/ActionTypes'

const initialState = {
    articles: []
};

function article(state = initialState.articles, action = undefined) {
    switch (action.type) {
        case types.ADD_ARTICLE:
            break;
        default:
            return state;
    }
    return state;
}

export default function article(state = initialState, action = undefined) {
    switch (action.type) {
        case types.ADD_ARTICLE:
            return article(state.articles, action);
        default:
            return state;
    }
}