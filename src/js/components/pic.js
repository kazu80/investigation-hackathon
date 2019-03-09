import React from 'react';
import styled from 'styled-components';

const Picture = styled.img`

`;

export default class Pic extends React.Component {
    render () {
        return (
            <Picture src={this.props.path} alt=""/>
        );
    }
}
