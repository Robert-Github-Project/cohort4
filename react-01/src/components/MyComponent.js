import React from 'react';
import OddComponent from './OddComponent';
import EvenComponent from './EvenComponent';
class MyComp extends React.Component {

    componentFucntion = () => {
        if (this.props.counter%2===1){
      return     <OddComponent />}
      return <EvenComponent />
      }
    render() {
        return (
            <div>
                <div>{this.componentFucntion()}</div>
                <button onClick={this.props.onPush}>
                    Push Me
                </button>
                <h1>Hello World from MyComp {this.props.whatToSay}</h1>
                      
            </div>
        )
    }
}

export default MyComp;