import React from 'react';

const person = (props) => {
    return (
        <div>
            <p className="App-intro">
                Hello {props.name}!
            </p>
            <input type="text" onChange={props.change}></input>
        </div>
    )
};

export default person;