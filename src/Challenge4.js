import {
    ChallengeHeading,
    ChallengeWrapper,
    Description
} from './Elements';

const Challenge4 = ({ clickCount }) => {
    const { ch1, ch2, ch3 } = clickCount;

    return (
        <ChallengeWrapper >
            <ChallengeHeading>Challenge 4</ChallengeHeading>
            <Description>Make challenges 1-3 record the number of times each is clicked and report the numbers here, formatted
                cleanly.
            </Description>
            <div>
                <div>C1: # {ch1}</div>
                <div>C2: # {ch2}</div>
                <div>C3: # {ch3}</div>
                <div>Total: # {ch1 + ch2 + ch3}</div>
            </div>
        </ChallengeWrapper>
    )
}

export default Challenge4;