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
0% {
transform: translateX(100%);
}

25% {
transform: translateX(50%);
}

37.5% {
transform: translateX(25%);
}

49% {
transform: translateX(25%);
}

50% {
transform: translateX(0%);
}

61.5% {
transform: translateX(0%);
}

62.5% {
transform: translateX(-25%);
}

74% {
transform: translateX(-25%);
}

75% {
transform: translateX(-50%);
}

86.5% {
transform: translateX(-50%);
}

87.5% {
transform: translateX(-75%);
}

99% {
transform: translateX(-75%);
}

100% {
transform: translateX(-100%);
}
`;

const slide02 = keyframes`
0% {
transform: translateX(0);
}

25% {
transform: translateX(-50%);
}

75% {
transform: translateX(-75%);
}

49% {
transform: translateX(-75%);
}

50% {
transform: translateX(-100%);
}

61.5% {
transform: translateX(-100%);
}

62.5% {
transform: translateX(-125%);
}

74% {
transform: translateX(-125%);
}

75% {
transform: translateX(-150%);
}

86.5% {
transform: translateX(-150%);
}

87.5% {
transform: translateX(-175%);
}

99% {
transform: translateX(-175%);
}

100% {
transform: translateX(-200%);
}
`;

const AnimationTime = 2000;
const AnimationUnit = 'ms';

const Wrapper01 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
animation: ${slide01} ${AnimationTime + AnimationUnit} ${((AnimationTime / 2) * -1) + AnimationUnit} linear infinite;
`;

const Wrapper02 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
animation: ${slide02} ${AnimationTime + AnimationUnit} linear infinite;
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
