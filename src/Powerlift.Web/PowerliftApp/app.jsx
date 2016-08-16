import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './init/appStart';
import reducers from './init/reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

render(
    <Provider store={createStoreWithMiddleware(reducers) }>
        <App />
    </Provider>
    , document.querySelector('#PowerliftApp'));
