import {
    ChallengeHeading,
    ChallengeWrapper,
    Description
} from './Elements';

import { useState, useEffect } from 'react';
import { debounce } from "lodash";

const Challenge3 = ({ onClick }) => {

    const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const resizeHandler = debounce((event) => {
            const width = event.target.innerWidth;
            const height = event.target.innerHeight;
            setDimensions({ width, height });
        }, 300);
        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
        }
    }, []);

    return (
        <ChallengeWrapper onClick={onClick}>
            <ChallengeHeading>Challenge 3</ChallengeHeading>
            <Description>Report the window dimensions. This should update when the window size is changed.</Description>
            <div><div>Width X Height : {dimensions.width} X {dimensions.height}</div></div>
        </ChallengeWrapper>
    )
}

export default Challenge3;