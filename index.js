'use strict';

import React from 'react'
import { render } from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reduces'
import Editor from './containers/Editor'

import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const middleware = process.env.NODE_ENV === 'production' ? [thunk] : [thunk, logger()];

const finalCreateStore = compose(
    applyMiddleware(...middleware),
    devTools()
)(createStore);

const store = finalCreateStore(reducer);

render(
    <div className="wechat-editor-wrap">
        <div className="wechat-editor">
            <Provider store={store}>
                <Editor />
            </Provider>
        </div>
    </div>,
    document.getElementById('wechat-article-editor')
);