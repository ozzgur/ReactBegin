import { Button } from '@material-ui/core'
import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        
      }
      clickHandler = () => {
          this.setState({
              count: this.state.count + 1
          })
      }
    render() {
        
        return (
            <div>
                <h3>{this.state.count}</h3>
                <Button onClick={() => this.clickHandler()}>Click Button</Button>
            </div>
        )
    }
}

export default Counter
