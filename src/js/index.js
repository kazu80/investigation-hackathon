import React from 'react';
import ReactDOM from 'react-dom';
import Pic from './components/pic';
import styled, {keyframes} from 'styled-components';

const Mask = styled.div`
display: flex;
flex-direction: row;
margin: 0 auto;
width: 200px;
overflow: hidden;
`;

const slide01 = keyframes`
from {
transform: translateX(100%);
}

to {
transform: translateX(-100%);
}
`;

const slide02 = keyframes`
from {
transform: translateX(0);
}

to {
transform: translateX(-200%);
}
`;

const Wrapper01 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
animation: ${slide01} 3s -1.5s linear infinite;
`;

const Wrapper02 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
animation: ${slide02} 3s linear infinite;
`;


class Application extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello World</h1>
                <Mask>
                    <Wrapper01>
                        <Pic path={'/images/pic01.png'} />
                        <Pic path={'/images/pic02.png'} />
                        <Pic path={'/images/pic03.png'} />
                        <Pic path={'/images/pic04.png'} />
                    </Wrapper01>
                    <Wrapper02>
                        <Pic path={'/images/pic01.png'} />
                        <Pic path={'/images/pic02.png'} />
                        <Pic path={'/images/pic03.png'} />
                        <Pic path={'/images/pic04.png'} />
                    </Wrapper02>
                </Mask>
            </div>
        );
    }
}

ReactDOM.render(
    <Application />,
    document.getElementById('app')
);
