import React, {Component} from "react";

class Calculadora extends Component {
  
  state = {
    n1: "",
    n2: "",
    result: ""
  }

    handleChange = (event) => {
      this.setState({
        n1: event.target.value
        //irá pegar o valor recebido no input
      })
    } 

    handleChangeTwo = (event) => {
      this.setState({
        n2: event.target.value
        //irá pegar o valor recebido no input
      })
    } 
    //console.log(event.target.value)

    mult = () => {
      const {n1, n2} = this.state
      this.setState({
        result: n1 * n2
      })
    }

    div = () => {
      const {n1, n2} = this.state
      this.setState({
        result: n1 / n2
      })
    }

    som = () => {
      const {n1, n2} = this.state
      this.setState({
        result: n1 + n2
      })
    }

    sub = () => {
      const {n1, n2} = this.state
      this.setState({
        result: n1 - n2
      })
    }

  render(){
    return(
      <div>
        <h1>React App Calc</h1>
        <h2>{this.state.result}</h2>
        <input type="number" onChange={this.handleChange}/>
        <input type="number" onChange={this.handleChangeTwo}/>
          <button onClick={this.som}>+</button>
          <button onClick={this.sub}>-</button>
          <button onClick={this.mult}>*</button>
          <button onClick={this.div}>/</button>
          <button>Clear</button>
      </div>
    )
  }
}

export default Calculadora