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
                        <Pic src="/images/pic02.png" />
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
