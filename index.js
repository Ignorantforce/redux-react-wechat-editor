'use strict';

import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'

const middleware = process.env.NODE_ENV === 'production' ? [thunk] : [thunk, logger()];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleware(reducer);

render(
    <Provider>
    </Provider>,
    document.getElementById('root')
);