'use strict';

import React from 'react'
import { render } from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reduces'
import App from './containers/App'

// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';
// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const middleware = process.env.NODE_ENV === 'production' ? [thunk] : [thunk, logger()];

const finalCreateStore = compose(
    applyMiddleware(...middleware),
    devTools()
)(createStore);

const store = finalCreateStore(reducer);

render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
        <DebugPanel top right bottom>
            <DevTools store={store} monitor={LogMonitor}/>
        </DebugPanel>
    </div>,
    document.getElementById('root')
);