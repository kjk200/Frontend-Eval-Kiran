import {
  ChallengeHeading,
  ChallengeWrapper,
  Description
} from './Elements';
import styled from 'styled-components';

//const EARTH_RADIUS =

const Challenge2 = ({ onClick }) => {
  return (
    <ChallengeWrapper onClick={onClick}>
      <ChallengeHeading>Challenge 2</ChallengeHeading>
      <Description>Make the Moon orbit the Earth.</Description>
      <Orbit><Earth /><Moon /></Orbit>
    </ChallengeWrapper>
  )
}

const Orbit = styled.div`
    position:relative;
    width:100%;
    height:200px;
`
const Moon = styled.div`
    position:absolute;
    top:calc(50% - 75px  );
    left:calc(50% - 75px);
    background-color: gray;
    height: 20px;
    width: 20px;
    border-radius: 50%;  
    animation:moon-revolution 10s infinite linear;
    transform-origin:75px 75px;

    @keyframes moon-revolution {
      100% {
      transform: rotate(-360deg);
    }
`

const Earth = styled.div`
  position:absolute;
  top:calc(50% - 50px);
  left:calc(50% - 50px);
  background-color: blue;
  height: 100px;
  width: 100px;
  border-radius: 50%;

`

export default Challenge2;