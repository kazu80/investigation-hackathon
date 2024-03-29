import React from 'react';
import styled, {keyframes} from 'styled-components';
import Pic from './styled/pic';
import Wrapper from './styled/wrapper';
import Panel from  './styled/panel';
import { withRouter, Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePanel: false,
            activePanelOpacity: false,
            activeUpload: false,
            activeUploadPic: false,
            activePics: false,
            transformPics: false,
            timeAnimation: 500,
        };

        FB.getLoginStatus((response) => {
            if (response.status !== 'connected') {
                this.props.history.push('/login')
            }
        });
    }

    componentDidMount () {
        setTimeout(() => this.setState({activePanel: true}), 3000);
    }

    handleTransitionEnd(e) {
        switch (e.propertyName) {
            case 'transform':
                setTimeout(() => this.setState({activePanelOpacity: true}), 2000);
                break;
            case 'background-color':
                setTimeout(() => {
                    this.setState({activePics: true});

                    let c = 0;
                    let i = 0;
                    const intervalKey = setInterval(() => {
                        i++;

                        if (i === c + (this.state.timeAnimation / 500)) {
                            c = i;
                            this.setState({timeAnimation: this.state.timeAnimation + 500}); // 1000
                            if (this.state.timeAnimation >= 3000) {
                                clearInterval(intervalKey);

                                this.setState({activeUpload: true});
                            }
                        }
                    }, 500);
                }, 5000);

                break;
            default:
                console.log(e.propertyName);
        }
    }

    handleUpload(e) {
        e.preventDefault();
        e.stopPropagation();

        this.setState({transformPics: true});

        setTimeout(() => {
            this.setState({activeUpload: false});
            this.setState({timeAnimation: 20000});
            this.setState({activeUploadPic: true})
        }, 1000);
    }

    getAnimationTime() {
        return String(1000);
    }

    render () {
        return (
            <Wrapper>
                <Panel active={this.state.activePanel} opacity={this.state.activePanelOpacity.toString()} onTransitionEnd={(e) => this.handleTransitionEnd(e)} direction='column'>
                    <ButtonLink active={this.state.activeUpload.toString()} onClick={(e) => this.handleUpload(e)}>TARGET UPLOAD</ButtonLink>
                    <WrapperContents>
                        <Mask active={this.state.activePics} transform={this.state.transformPics.toString()}>
                            <WrapperPic animation='slide01' time={this.state.timeAnimation}>
                                <Pic src="/images/pic01.png" />
                                <Pic src="/images/pic02.png" />
                                <Pic src="/images/pic03.png" />
                                <Pic src="/images/pic04.png" />
                            </WrapperPic>
                            <WrapperPic animation='slide02' time={this.state.timeAnimation}>
                                <Pic src="/images/pic01.png" />
                                <Pic src="/images/pic02.png" />
                                <Pic src="/images/pic03.png" />
                                <Pic src="/images/pic04.png" />
                            </WrapperPic>
                        </Mask>
                        <UploadPic active={this.state.activeUploadPic.toString()} src="/images/pic01.png" />
                    </WrapperContents>
                </Panel>
            </Wrapper>
        );
    }
}

export default withRouter(Home);

const puffInHor = keyframes`
  0% {
    transform: scaleX(2);
    filter: blur(2px);
    opacity: 0;
  }
  100% {
    transform: scaleX(1);
    filter: blur(0px);
    opacity: 1;
  }
`;

const ButtonLink = styled.a`
display: ${props => props.active === 'true' ? 'block' : 'none'};
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
opacity: 0;
animation: ${puffInHor} 200ms cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
animation-play-state: ${props => props.active === 'true' ? 'unset' : 'paused'};

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
position: absolute;
left: ${props => props.transform === 'true' ? '30%' : '50%'};
bottom: 40px;
transform: translateX(-50%);
display: flex;
flex-direction: row;
width: ${props => props.transform === 'true' ? '200px' : '800px'};
overflow: hidden;
opacity: ${props => props.active === true ? '1' : '0'};
transition: all 400ms ease-out;
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

const WrapperContents = styled.div`
display: flex;
flex-direction: row;
`;

const UploadPic = styled.img`
display: block;
position: absolute;
right: 30%;
bottom: 40px;
transform: translateX(50%);
opacity: ${props => props.active === 'true' ? '1' : '0'};
transition: opacity 400ms ease-out;
`;
