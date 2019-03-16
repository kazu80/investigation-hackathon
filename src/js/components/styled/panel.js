import styled, {keyframes} from 'styled-components';

export default styled.div`
position: relative;
display: flex;
flex-direction: ${props => props.direction === 'column' ? 'column' : 'row'};
justify-content: ${props => props.justify === 'center' ? 'center' : 'space-between' };
align-items: center;
padding-top: 62px;
padding-bottom: 40px;
width: 1000px;
height: 598.21px;
background: linear-gradient(45deg, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);
overflow: hidden;
background: rgba(255, 255, 255, ${props => props.opacity === 'true' ? '.7' : '.3'});
transform: scale(${props => props.active === true ? '1' : '0'});
transition: all 200ms ease-in-out;
z-index: 1;
`;
