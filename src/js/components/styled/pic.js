import styled, {keyframes} from 'styled-components';

export default styled.img`
width: ${props => (props.width ? props.width : 'unset')};
object-fit: ${props => (props.width ? 'contain' : 'unset')};
`;
