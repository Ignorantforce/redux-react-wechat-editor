'use strict';

import * as types from '../constants/ActionTypes'


export function addArticle() {
    return {
        type: types.ADD_ARTICLE,


};
}
export function editArticle(articleIdx) {
    return {
        type: types.EDIT_ARTICLE,
        articleIdx: articleIdx
    };
}

export function deleteArticle(articleIdx) {
    return {
        type: types.DELETE_ARTICLE,
        articleIdx: articleIdx
    }
}
export function changePosition(articleIdx) {
    return {
        type: types.CHANGE_POSITION,
        articleIdx: articleIdx
    }
}
export function onEditing(articleIdx) {
    return {
        type: types.ON_EDITING,
        editingIdx: articleIdx
    }
}