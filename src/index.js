import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import Header from './header/header';
import TopList from './top_list/top_list';
import Donate from './donate/donate';

const App = () => (
    <section>
        <Header />
        <Switch>
            <Route exact path="/" component={ TopList }/>
            <Route path="/top_list" component={ TopList }/>
            <Route path="/donate" component={ Donate }/>
        </Switch>
    </section>
);

ReactDOM.render(
    <BrowserRouter className="container">
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();
