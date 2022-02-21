import React, {Component} from "react";
import './App.css'
import logo from "./logo.png"

class Calculadora extends Component {
  
  state = {
    n1: "",
    n2: "",
    res: ""
  }

    handleChange1 = (event) => {
      this.setState({
        n1: Number(event.target.value)
        //irá pegar o valor recebido no input
      })
    } 

    handleChange2 = (event) => {
      this.setState({
        n2: Number(event.target.value)
        //irá pegar o valor recebido no input
      })
    } 

    div = () => {
      const {n1, n2} = this.state
      if (n1 && n2 !== ""){
        this.setState({
          res: n1 / n2
        })
      } else {
        this.setState({
          res: "Nenhum valor foi digitado."
        })
      }
    }

    mult = () => {
      const {n1, n2} = this.state
      if (n1 && n2 !== ""){
        this.setState({
          res: n1 * n2
        })
      } else {
        this.setState({
          res: "Nenhum valor foi digitado."
        })
      }
    }

    sub = () => {
      const {n1, n2} = this.state
      if (n1 && n2 !== ""){
        this.setState({
          res: n1 - n2
        })
      } else {
        this.setState({
          res: "Nenhum valor foi digitado."
        })
      }
    }

    som = () => {
      const {n1, n2} = this.state
      if (n1 && n2 !== ""){
        this.setState({
          res: n1 + n2
        })
      } else {
        this.setState({
          res: "Nenhum valor foi digitado."
        })
      }
    }

    clear = () => {
      const {n1, n2} = this.state
      if (n1 && n2 !== ""){
        this.setState({
          res: null,
          n1: 0,
          n2: 0
        })
      } else {
        this.setState({
          res: "Nenhum valor foi digitado."
        })
      }
    }

  render(){
    return(
      <div className="container">
        <div className="box">
        <img src={logo}/>
        <h1>React App Calc</h1>
        <h2>{this.state.res}</h2>
        <input value={this.state.n1} type="number" onChange={this.handleChange1}/>
        <input value={this.state.n2} type="number" onChange={this.handleChange2}/>
        <div className="btns">
          <button onClick={this.div}>/</button>
          <button onClick={this.mult}>*</button>
          <button onClick={this.sub}>-</button>
          <button onClick={this.som}>+</button>
          <button onClick={this.clear}>Clear</button>
        </div>
          </div>
      </div>
    )
  }
}

export default Calculadora