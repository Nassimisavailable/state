import React, { Component } from 'react'
    
class Cycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervall: null,
      timer: 0
    };
  }
  componentDidMount(){
    this.setState({
      intervall : setInterval(() =>{
        this.setState({timer: this.state.timer +1});
      }, 1000),
    })
  }
  componentDidUpdate(){}

  componentWillUnmount(){
    clearInterval(this.state.intervall)
  }

state = {
  isVisible:false
}

  person = [
  'fullName',
  'bio',
  'imgSrc',
  'profession'
]
toggleVisibility = () => {
  this.setState({
    isVisible : !this.state.isVisible
  })
}
  render() {
    return (
      <div>
        <ul>
          {this.person.map((person, i)=>(
            <li key={i}> {person} </li>
          ))}
        </ul> <h2>{this.state.timer}</h2>
      </div>
    );
 };
}
export default Cycle;