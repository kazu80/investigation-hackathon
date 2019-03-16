import React from 'react';
import styled from 'styled-components';
import Wrapper from './styled/wrapper';
import { Link } from 'react-router-dom';

export class Login extends React.Component {
    render () {
        return (
            <Wrapper>
                <Panel>
                    <Title>INVESTIGATION</Title>
                    <ButtonLink to="/home">LOGIN</ButtonLink>
                </Panel>
            </Wrapper>
        );
    }
}

const Panel = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding-top: 92px;
padding-bottom: 160px;
width: 700px;
height: 400px;
background: linear-gradient(45deg, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);
`;

const Title = styled.div`
display: inline-block;
width: 100%;
font-size: 30px;
line-height: 100%;
color: #707070;
text-align: center;
`;

const ButtonLink = styled(Link)`
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
width: 45px;
height: 45px;
background: url("/images/icon-fb.svg") center no-repeat;
background-size: contain;
}
`;
