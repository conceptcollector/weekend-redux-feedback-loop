import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const summary = [{
}];

const summaryReducer = (state = summary, action) => {
    if (action.type === 'ADD_TO_SUMMARY') {
        return [...state, action.payload];
    }
}

const storeInstance = createStore(
    combineReducers({
      summaryReducer
    }),
    applyMiddleware(logger),
  );

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
document.getElementById('root'));

registerServiceWorker();
