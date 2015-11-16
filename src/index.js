'use strict';

import React from 'react'
import { render } from 'react-dom'
import { compose, createStore, applyMiddleware,combineReducers} from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reduces'
import App from 'containers/App'
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import DiffMonitor from 'redux-devtools-diff-monitor'


const middleware = process.env.NODE_ENV === 'production' ? [thunk] : [thunk, logger()];

const finalCreateStore = compose(
    applyMiddleware(...middleware),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const store = finalCreateStore(reducer);
//if (module.hot) {
//    module.hot.accept('./reduces', () =>
//        store.replaceReducer(combineReducers(require('./reduces')))
//    );
//}
render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>

        <DevTools store={store} monitor={DiffMonitor} shortcut='ctrl+d'/>
    </div>,
    document.getElementById('root')
);