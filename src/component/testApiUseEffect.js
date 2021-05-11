import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestApiUseEffect = () => {
    const [clickCount, setClickCount] = useState(0);
    const [apiCallResponse, setApiCallResponse] = useState({});

    useEffect(() => {
        console.log('called useEffect');
    });

    const callApi = () => {
        axios.get('http://localhost/testApi')
        .then(response => {
            setApiCallResponse(response.data);
        })
        .catch(() => setApiCallResponse('api call error'));
    }

    return (
        <React.Fragment>
            <p>Click Count: {clickCount}</p>
            <p>Api Response: {apiCallResponse.message}</p>
            <p>This is Api call test using useEffect</p>
            <button onClick={() => setClickCount(clickCount+1)}>simulate click</button>
            <button onClick={callApi}>make Api Call</button>
        </React.Fragment>
    )
}

export default TestApiUseEffect;