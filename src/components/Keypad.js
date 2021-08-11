import React, {Component} from 'react'

export default class Keypad extends Component{
    
    keyUpEvent = () => (console.log("Entering password"))

    render(){
        return(
            <div>
                <input type = "password" onKeyUp= {this.keyUpEvent}></input>
            </div>
        )
    }

}

/* import React from 'react';

class Keypad extends React.Component {

  handleInputPassword = () => console.log('Entering password...')

  render() {
    return (
      <div>
        <input 
          type="password"
          onKeyUp={this.handleInputPassword} 
        />
        <button>Submit</button>
      </div>
    )
  }
}

export default Keypad; 
 */