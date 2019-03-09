import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/slider';

const pics = [
    '/images/pic01.png',
    '/images/pic02.png',
    '/images/pic03.png',
    '/images/pic04.png',
];

class Application extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello World</h1>
                <Slider pics={pics}></Slider>
            </div>
        );
    }
}

ReactDOM.render(
    <Application />,
    document.getElementById('app')
);
