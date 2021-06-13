import styled from 'styled-components';
import {
    ChallengeHeading,
    ChallengeWrapper,
    Description
} from './Elements';
import a from './a.jpg';
import "./index.css";

const Challenge1 = ({ onClick }) => {
    return (
        <ChallengeWrapper onClick={onClick}>
            <ChallengeHeading>Challenge 1</ChallengeHeading>
            <Description>Style SingleDiv to look like the image.</Description>
            <div><img src={a} width={100} height="auto" alt="" />
                <SingleDiv />
            </div>
        </ChallengeWrapper >
    )
}

const SingleDiv = styled.div`
    position: relative;
    background-color: black;
    height: 120px;
    width: 95px;
    transform: translate(150px, -127px);
    clip-path: polygon(
    34% 0%,
    66% 0%,
    97% 100%,
    67% 100%,
    63% 85%,
    31% 85%,
    38% 61%,
    57% 61%,
    49% 30%,
    31% 100%,
    0% 100%
  );

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    background-color: white;
    height: 120px;
    width: 95px;
    clip-path: polygon(
      36% 2%,
      64% 2%,
      94% 98%,
      69% 98%,
      65% 83%,
      33% 83%,
      34% 63%,
      60% 63%,
      49% 20%,
      29% 98%,
      3% 98%
    );
  }
 `


export default Challenge1;