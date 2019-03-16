import React from 'react';
import styled, {keyframes} from 'styled-components';
import Pic from './pic';

export class Home extends React.Component {

    getAnimationTime() {
        return String(30000);
    }

    render () {
        return (
            <Wrapper>
                <Panel>
                    <Button>TARGET UPLOAD</Button>
                    <Mask>
                        <WrapperPic animation='slide01' time={this.getAnimationTime()}>
                            <Pic path="/images/pic01.png" w200 />
                            <Pic path="/images/pic02.png" w200 />
                            <Pic path="/images/pic03.png" w200 />
                            <Pic path="/images/pic04.png" w200 />
                        </WrapperPic>
                        <WrapperPic animation='slide02' time={this.getAnimationTime()}>
                            <Pic path="/images/pic01.png" w200 />
                            <Pic path="/images/pic02.png" w200 />
                            <Pic path="/images/pic03.png" w200 />
                            <Pic path="/images/pic04.png" w200 />
                        </WrapperPic>
                    </Mask>
                </Panel>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
background: url("/images/wall01.jpg") no-repeat center center;
background-size: cover;
`;

const Panel = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding-top: 62px;
padding-bottom: 40px;
width: 1000px;
height: 598.21px;
background: linear-gradient(45deg, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);
`;

const Button = styled.a`
display: block;
position: relative;
width: 400px;
height: 80px;
font-size: 30px;
line-height: 80px;
color: #fff;
background-color: #4469B0;
text-decoration: none;
text-align: center;
outline: none;
box-shadow:0 3px 6px 0 rgba(0,0,0,0.53);

&:before {
content: "";
position: absolute;
top: 50%;
left: 30px;
transform: translateY(-50%);
width: 32px;
height: 32px;
background: url("/images/icon-pic.svg") center no-repeat;
background-size: contain;
}
`;

const WrapperPic = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
animation-name: ${props => props.animation === 'slide01' ? slide01 : slide02};
animation-duration: ${props => props.time ? props.time + 'ms' : '3000ms'};
animation-delay: ${props => props.animation === 'slide01' ? props.time ? (parseInt(props.time) / 2) * -1 + 'ms' : '-1.5s' : 'unset' };
animation-timing-function: linear;
animation-iteration-count: infinite;
`;

const Mask = styled.div`
display: flex;
flex-direction: row;
margin: 0 auto;
width: 800px;
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
