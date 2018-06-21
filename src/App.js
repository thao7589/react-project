import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          name: ''
      };
      this.change = (ev) => {
          console.log(ev)
          this.setState({
                  name: ev.target.value
              }
          )
        }
    }
    render() {
    return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>

            <p className="App-intro">
              Hello {this.state.name}!
            </p>
              <input type="text" onChange={this.change}></input>
          </div>
        );
    }

}

export default App;
