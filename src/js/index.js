import React from 'react';
import ReactDOM from 'react-dom';
import Pic from './components/pic';

class Application extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello World</h1>
                <Pic />
            </div>
        );
    }
}

ReactDOM.render(
    <Application />,
    document.getElementById('app')
);
