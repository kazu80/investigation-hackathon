import React from 'react';
import ReactDOM from 'react-dom';
import styled, {keyframes} from 'styled-components';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Home } from './components/home';
import Login from './components/login';
import { Search } from './components/search';

class Application extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/search' component={Search} />
                </div>
            </BrowserRouter>
        );
    }
}



ReactDOM.render(
    <Application />,
    document.getElementById('app')
);


