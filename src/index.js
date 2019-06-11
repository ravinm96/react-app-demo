import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {MemoryRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import reducer from './reducer/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    card: reducer
});

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <MemoryRouter>
            <App/>
        </MemoryRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
