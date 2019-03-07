import React from 'react';
import ReactDOM from 'react-dom';
import Pic from './components/pic';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
`;


class Application extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello World</h1>
                <Wrapper>
                    <Pic path={'/images/pic01.png'} />
                    <Pic path={'/images/pic02.png'} />
                    <Pic path={'/images/pic03.png'} />
                    <Pic path={'/images/pic04.png'} />
                </Wrapper>
            </div>
        );
    }
}

ReactDOM.render(
    <Application />,
    document.getElementById('app')
);
