import React from 'react';
import styled, {keyframes} from 'styled-components';
import Wrapper from './styled/wrapper';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePanel: false,
            activePanelOpacity: false,
            activeTitle: false,
            activeButton: false,
            activeSuccess: false,
        };

        FB.getLoginStatus((response) => {

            if (response.status === 'connected') {
                FB.api('/me?fields=id,name,picture', function(response) {
                    console.log(response);
                    // console.log('Good to see you, ' + response.name + '.');
                });
            }



            // statusChangeCallback(response);
        });
    }

    handleClickWrapper (e) {
        e.preventDefault();
        e.stopPropagation();

        this.setState({activePanel: true});
    }

    handleTransitionEnd(e) {
        switch (e.propertyName) {
            case 'transform':
                this.setState({activePanelOpacity: true});
                break;
            case 'background-color':
                this.setState({activeTitle: true});
                break;
            default:
                console.log(e.propertyName);
        }
    }

    handleAnimationEnd(e) {
        switch (e.animationName) {
            case 'iEJYHk':
                setTimeout(() => this.setState({activeButton: true}), 600);
                break;
            default:
                console.log(e.animationName);
        }
    }

    handleClickLinkButton(e) {
        e.preventDefault();
        e.stopPropagation();

        this.setState({activePanel: false});

        FB.login((response) => {
            if (response.status === 'connected') {
                // Logged into your app and Facebook.
                this.setState({activeSuccess: true});
                setTimeout(() => this.props.history.push('/home'), 3400);
            } else {
                // The person is not logged into this app or we are unable to tell.
            }
        }, {scope: 'public_profile,email,user_friends'});
    }

    render () {
        return (
            <Wrapper onClick={(e) => this.handleClickWrapper(e)}>
                <Panel active={this.state.activePanel} opacity={this.state.activePanelOpacity.toString()} onTransitionEnd={(e) => this.handleTransitionEnd(e)}>
                    <Title active={this.state.activeTitle.toString()} onAnimationEnd={(e) => this.handleAnimationEnd(e)}>INVESTIGATION</Title>
                    <ButtonLink active={this.state.activeButton.toString()} onClick={(e) => this.handleClickLinkButton(e)}>LOGIN</ButtonLink>
                </Panel>
                <SuccessText active={this.state.activeSuccess.toString()}>SUCCESS</SuccessText>
            </Wrapper>
        );
    }
}

export default withRouter(Login);

const Panel = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding-top: 92px;
padding-bottom: 160px;
width: 700px;
height: 400px;
background: rgba(255, 255, 255, ${props => props.opacity === 'true' ? '.7' : '.3'});
transform: scale(${props => props.active === true ? '1' : '0'});
transition: all 200ms ease-in-out;
z-index: 1;
`;

const textFocusIn = keyframes`
  0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
`;

const Title = styled.div`
display: inline-block;
width: 100%;
font-size: 30px;
font-weight: bold;
line-height: 100%;
color: #707070;
text-align: center;
opacity: 0;
animation: ${textFocusIn} 400ms cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
animation-play-state: ${props => props.active === 'true' ? 'unset' : 'paused'};
`;

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
width: 45px;
height: 45px;
background: url("/images/icon-fb.svg") center no-repeat;
background-size: contain;
}
`;

const FocusInContract = keyframes`
  0% {
    letter-spacing: 1em;
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
`;

const SuccessText = styled.div`
display: ${props => props.active === 'true' ? 'block' : 'none'};
position: absolute;
font-size: 60px;
line-height: 100%;
color: #5CFF33;
letter-spacing: 5px;
text-shadow:0 2px 2px rgba(100,100,100,0.65);
z-index: 1;
opacity: 0;
animation: ${FocusInContract} 600ms 1000ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
animation-play-state: ${props => props.active === 'true' ? 'unset' : 'paused'};
`;
