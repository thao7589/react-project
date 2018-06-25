import React, { Component } from 'react';
import Input from './Assignment-01/UserInput';
import Output from './Assignment-01/UserOutput';
import './App.css';
import './Person/Person.css'
class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          check: false,
      };
      this.change = (ev) => {
          this.setState({
                  [ev.target.id]: ev.target.value,
              }
          )
        }
      this.login = () => {
          let check = this.state.Password && this.state.Password == 'thao' ? true : false;
          this.setState ({
              check: check
          })
      }
    }
    render() {
    return (
        <div className="Person">
            <Input change={this.change} login={this.login}/>
            {
                this.state.check && <Output name={this.state.Username}/>
            }

        </div>
        );
    }

}

export default App;
