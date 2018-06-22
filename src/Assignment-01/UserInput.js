import React from 'react';

const input = (props) => {
    return (
        <div>
            <div>
                <label>Username:</label>
                <input type="text" id="Username" onChange={props.change}/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" id="Password" onChange={props.change}/>
            </div>
            <div>
                <button onClick={props.login}>Login</button>
            </div>
        </div>
    )
};

export default input;