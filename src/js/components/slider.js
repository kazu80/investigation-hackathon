import React from 'react';
import styled, {keyframes} from 'styled-components';
import Pic from './pic';

const Mask = styled.div`
position: relative;
display: flex;
flex-direction: row;
margin: 0 auto;
width: 200px;
overflow: hidden;

&:after {
content: "";
position: absolute;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
width: 150px;
height: 150px;
background: url("/images/effect01.png") no-repeat;
background-size: contain;
z-index: 1;
}
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

const AnimationTime = '50000ms';

const Wrapper01 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
animation: ${slide01} ${AnimationTime} calc((${AnimationTime} / 2) * -1) linear infinite;
`;

const Wrapper02 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
animation: ${slide02} ${AnimationTime} linear infinite;
`;

export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    getPics () {
        const pics = this.props.pics.map (pic => <Pic path={pic} />);
        return (pics);
    }

    render () {
        return (
            <Mask>
                <Wrapper01 time>
                    {this.getPics()}
                </Wrapper01>
                <Wrapper02 time>
                    {this.getPics()}
                </Wrapper02>
            </Mask>
        );
    }
}
