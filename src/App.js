import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`;
const Container = styled.div`
  background-color: darkblue;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  height: 70vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 30px;
  box-shadow: 0 0 0.4em cyan;
`;

const Title = styled.h1`
  color: rgb(231, 231, 20);
  text-shadow: 2px 2px 2px black;
  font-weight: 900;
  margin-bottom: 15px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const SubTitle = styled.h2`
  color: rgb(231, 231, 182);
  margin-bottom: 15px;
`;

const Numbers = styled.input`
  border: none;
  margin: 15px;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 1px 2px 5px rgba(255, 255, 255, 0.473);
`;

const Buttons = styled.button`
  box-shadow: inset 0 0 10px 10px darkblue, inset;
  background: linear-gradient(to left, yellow, cyan, violet);
  font-size: 1.8em;
  border: none;
  padding: 2px;
  margin: 1em;
  border-radius: 10px;
  height: 90px;
`;

const ButtonsCalc = styled.button`
  font-size: 0.6em;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  margin-top: 20px;
  font-weight: 900;
  justify-content: center;
  align-items: center;
`;

class Calculadora extends Component {
  state = {
    n1: "",
    n2: "",
    res: ""
  };

  handleChange1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
      //irá pegar o valor recebido no input
    });
  };

  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
      //irá pegar o valor recebido no input
    });
  };

  div = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 / n2
      });
    } else {
      this.setState({
        res: "Nenhum valor foi digitado."
      });
    }
  };

  mult = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 * n2
      });
    } else {
      this.setState({
        res: "Nenhum valor foi digitado."
      });
    }
  };

  sub = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 - n2
      });
    } else {
      this.setState({
        res: "Nenhum valor foi digitado."
      });
    }
  };

  som = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 + n2
      });
    } else {
      this.setState({
        res: "Nenhum valor foi digitado."
      });
    }
  };

  clear = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: null,
        n1: 0,
        n2: 0
      });
    } else {
      this.setState({
        res: "Nenhum valor foi digitado."
      });
    }
  };

  render() {
    return (
      <Container>
        <GlobalStyle />
        <Box>
          <Title>React App Calc</Title>
          <SubTitle>{this.state.res}</SubTitle>
          <Numbers
            value={this.state.n1}
            type="number"
            onChange={this.handleChange1}
          />
          <Numbers
            value={this.state.n2}
            type="number"
            onChange={this.handleChange2}
          />
          <Buttons>
            <ButtonsCalc onClick={this.div}>/</ButtonsCalc>
            <ButtonsCalc onClick={this.mult}>*</ButtonsCalc>
            <ButtonsCalc onClick={this.sub}>-</ButtonsCalc>
            <ButtonsCalc onClick={this.som}>+</ButtonsCalc>
            <ButtonsCalc onClick={this.clear}>Clear</ButtonsCalc>
          </Buttons>
        </Box>
      </Container>
    );
  }
}

export default Calculadora;
