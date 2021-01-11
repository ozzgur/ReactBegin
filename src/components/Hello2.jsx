import { Button } from '@material-ui/core'
import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Hello visitor',
            click: false
        };
        
      }
      
      clickHandler = () => {
          this.setState({
             click: !this.state.click
          })
      }
    render() {
        
        return (
            <div>
                <h3>{this.state.click !== true ? 'Hello visitor' : 'Thank you'}</h3>
                <Button onClick={() => this.clickHandler()}>Click Button</Button>
            </div>
        )
    }
}

export default Counter
