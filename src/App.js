import React, {Component} from "react";
import logo from "./logo.png";
import styled from "styled-components"
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
` 
const Container = styled.div`
  background-color: rgba(12, 12, 158, 0.808);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const LogoVaiNaWeb = styled.img`
  width: 5vw;
`

const Box = styled.div`
  height: 70vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: yellow solid 2px;
  border-radius: 30px;
  box-shadow: 3px 3px 2px rgba(255, 255, 255, 0.473);
`

const Title = styled.h1`
  color: rgb(231, 231, 20);
  margin-bottom: 15px;
`

const SubTitle = styled.h2`
  color: rgb(231, 231, 182);
  margin-bottom: 15px;
`

const Numbers = styled.input`
  border: none;
  margin: 10px;
  padding: 12px;
  border-radius: 30px;
  box-shadow: 3px 3px 2px rgba(255, 255, 255, 0.473);
`

const Buttons = styled.button`
  font-size: 1.8em;
  border: none;
  padding: 6px;
  margin: 0.2em;
  border-radius: 10px;
  margin-top: 20px;
  background-color: rgb(223, 202, 176);
`

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
      <Container>
        <GlobalStyle/>
        <Box>
        <LogoVaiNaWeb src={logo}/>
        <Title>React App Calc</Title>
        <SubTitle>{this.state.res}</SubTitle>
        <Numbers value={this.state.n1} type="number" onChange={this.handleChange1}/>
        <Numbers value={this.state.n2} type="number" onChange={this.handleChange2}/>
          <Buttons>
          <button onClick={this.div}>/</button>
          <button onClick={this.mult}>*</button>
          <button onClick={this.sub}>-</button>
          <button onClick={this.som}>+</button>
          <button onClick={this.clear}>Clear</button>
          </Buttons>
        </Box>
      </Container>
    )
  }
}

export default Calculadora