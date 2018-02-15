import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App'
import Category from './components/Category'
import rootReducer from './reducers';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './index.css'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={App}/>
                <Route path='/category' exact component={Category}/>
            </Switch>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'))