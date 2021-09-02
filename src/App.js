import React, { Component } from 'react'
import Cycle from './component/Cycle';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible:false
    };
  }

toggleVisibility = () => {
  this.setState({
    isVisible : !this.state.isVisible,
  });
};

  render() {
    return (
      <div>
        <button className="visibilty-btn" onClick={this.toggleVisibility}>
        {this.state.isVisible? "Hide state" : "Show state"}
        </button>
        {this.state.isVisible && <Cycle/>}
      </div>
    );
  }
}
export default App;