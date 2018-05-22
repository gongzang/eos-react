import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './configureStore';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import Reducer from './reducers/';
import { createStore } from 'redux';
// const store = configureStore();
const store = createStore(Reducer);

  
ReactDOM.render(
    <div>
        <Provider store={store}>
            <App /> 
        </Provider>
    </div>,
    document.getElementById('root'));

registerServiceWorker();
