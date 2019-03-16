import React from 'react';
import styled from 'styled-components';

const Picture = styled.img`
width: ${props => (props.w200 ? '200px' : 'unset')};
object-fit: ${props => (props.w200 ? 'contain' : 'unset')};
`;

export default class Pic extends React.Component {
    render () {
        return (
            <Picture src={this.props.path} w200={this.props.w200} alt=""/>
        );
    }
}
