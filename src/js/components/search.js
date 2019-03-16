import React from 'react';
import Slider from './slider';

const pics = [
    '/images/pic01.png',
    '/images/pic02.png',
    '/images/pic03.png',
    '/images/pic04.png',
];

export class Search extends React.Component {
    render () {
        return (
            <div>
                <Slider pics={pics}></Slider>
            </div>
        );
    }
}
