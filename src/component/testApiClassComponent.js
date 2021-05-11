import React from 'react';
import axios from 'axios';

class TestApiClassComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor called');
        this.state = {
            clickCount: 0,
            apiCallResponse: ''
        }
    }

    componentDidMount() {
        console.log('componentDidMount called');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate called');
    }

    callApi = () => {
        axios.get('http://localhost/testApi')
            .then(response => {
                this.setState({ apiCallResponse: response.data });
            })
            .catch(() => this.setState({ apiCallResponse: 'api call error' }))
    }

    render() {
        return (
            <>
                <p>Click Count: {this.state.clickCount}</p>
                <p>Api Response: {this.state.apiCallResponse.message}</p>
                <p>This is class Based component to test api call</p>
                <button onClick={() => this.setState({ clickCount: this.state.clickCount + 1 })}>simulate click</button>
                <button onClick={this.callApi}>make Api Call</button>
            </>
        )
    }
}

export default TestApiClassComponent;