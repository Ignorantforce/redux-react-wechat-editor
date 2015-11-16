'use strict';

import { combineReducers } from 'redux'
import {
    default as article
} from './article'
import {
    default as form
} from './form'

export default combineReducers({
    article,
    form
});