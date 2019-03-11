import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Home } from './components/home';

class Application extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Home} />
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <Application />,
    document.getElementById('app')
);
