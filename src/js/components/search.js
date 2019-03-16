import React from 'react';
import styled, {keyframes} from 'styled-components';
import Slider from './slider';
import Wrapper from './styled/wrapper';
import Panel from './styled/panel';
import Pic from './styled/pic';

const pics = [
    '/images/pic01.png',
    '/images/pic02.png',
    '/images/pic03.png',
    '/images/pic04.png',
];

export class Search extends React.Component {
    render () {
        return (
            <Wrapper>
                <Panel>
                    <WrapperSearch>
                        <Slider pics={pics}></Slider>
                        <WrapperPicWithTitle>
                            <Pic src="/images/pic02.png" />
                        </WrapperPicWithTitle>
                    </WrapperSearch>
                </Panel>
            </Wrapper>
        );
    }
}

const WrapperSearch = styled.div`
display: flex;
flex-direction: row;
margin: 0 auto;
width: 600px;
`;

const WrapperPicWithTitle = styled.div`
position: relative;
display: block;

&::before {
  content: "TARGET";
  position: absolute;
  top: -35px;
  left: 0;
  width: 100%;
  font-size: 30px;
  line-height: 100%;
  color: #707070;
  font-weight: bold;
  text-align: center;
}
`;
