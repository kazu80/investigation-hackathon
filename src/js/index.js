import React from 'react';
import ReactDOM from 'react-dom';
import styled, {keyframes} from 'styled-components';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import { Search } from './components/search';
import VideoWall from './components/styled/videoWall';

class Application extends React.Component {
    render () {
        return (
            <div>
                <VideoWall src="/video/movie01.mov" autoPlay loop muted />
                <BrowserRouter>
                    <WrapperRouter>
                        <Route exact path='/' component={Login} />
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/search' component={Search} />
                    </WrapperRouter>
                </BrowserRouter>
            </div>
        );
    }
}

const WrapperRouter = styled.div`
position: relative;
z-index: 10;
`;


ReactDOM.render(
    <Application />,
    document.getElementById('app')
);


