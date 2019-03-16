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
                <Panel justify='center'>
                    <WrapperSearch>
                        <WrapperPicWithHit text='HIT'>
                            <Slider pics={pics}></Slider>
                        </WrapperPicWithHit>
                        <WrapperPicWithTarget>
                            <Pic src="/images/pic02.png" />
                        </WrapperPicWithTarget>
                    </WrapperSearch>
                </Panel>
            </Wrapper>
        );
    }
}

const WrapperSearch = styled.div`
position: relative;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 600px;
`;

const hit = keyframes`
0% {
  left: 50%
}

100% {
  left: 20%
}
`;

const target = keyframes`
0% {
  left: 50%
}

100% {
  left: 80%
}
`;

const WrapperPicWithTarget = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
animation: ${target} 1000ms ease-out forwards;

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
  text-shadow:0 2px 2px rgba(0,0,0,0.65);
}
`;

const WrapperPicWithHit = styled(WrapperPicWithTarget)`
animation: ${hit} 1000ms ease-out forwards;

&::before {
  content: "HIT";
  color: #5CFF33;
}
`;
