//***************** Assignment completed by Kiranjit Kaur*************

import Challenge1 from './Challenge1';
import Challenge2 from './Challenge2';
import Challenge3 from './Challenge3';
import Challenge4 from './Challenge4';
import {
    AppWrapper,
    Frame,
    Title
} from './Elements';

import { useState } from 'react';

function App() {

    const [clickCount, setClickCount] = useState({ ch1: 0, ch2: 0, ch3: 0 });

    const clickHandler = (keyName) => () => {
        const newCount = { ...clickCount, [keyName]: clickCount[keyName] + 1 };
        setClickCount(newCount);
    }

    return (
        <AppWrapper>
            <Title>Front-End Dev Evaluation</Title>
            <Frame>
                <Challenge1 onClick={clickHandler("ch1")} />
                <Challenge2 onClick={clickHandler("ch2")} />
                <Challenge3 onClick={clickHandler("ch3")} />
                <Challenge4 clickCount={clickCount} />
            </Frame>
        </AppWrapper>
    );
}

export default App;
