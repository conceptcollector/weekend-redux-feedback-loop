import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

const reviewReducer = (state = [], action) => {
    if (action.type === 'ADD_TO_REVIEW') {
        return [...state, action.payload];
    } else if (action.type === 'NEW_FEEDBACK') {
        return [];
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
      reviewReducer
    }),
    applyMiddleware(logger),
  );

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
document.getElementById('root'));

registerServiceWorker();
