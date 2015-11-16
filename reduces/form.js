'use strict';

import * as types from '../constants/ActionTypes'

const initialState = {
    article: null
};

export default function form(state = initialState, action = undefined) {
    console.log(state);
    switch (action.type) {
        default:
            return state;
    }
}