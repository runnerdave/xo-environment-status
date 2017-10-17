import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Footer = () => {
  return (
    <header className="App-footer">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Powered by React</h1>
    </header>
  )
}

const Button = (props) => {
  return (
    <button type="button" className={`btn btn-${props.status} btn-block`}>{props.text}</button>
  )
}

const Row = (props) => {
  return (
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-3"><Button text={props.buttons[0]} status="success" /></div>
      <div className="col-md-2"></div>
      <div className="col-md-3"><Button text={props.buttons[1]} status="danger" /></div>
      <div className="col-md-2"></div>
    </div>
  )
}

const SpacerRow = () => {
  return (
    <div className="row">
      <div className="col-md-12 Row-spacer"></div>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">        
        <div className="jumbotron" style={{height: '100vh'}}>
          <div className="container-fluid">
            <Row buttons={["OBDX SIT1", "OBDX SIT4"]} />
            <SpacerRow />
            <Row buttons={["DCO SIT1", "DCO SIT4"]} />
            <SpacerRow />
            <Row buttons={["DOCTA SIT1", "DOCTA SIT4"]} />
          </div>
        </div>
        <Footer />
      </div>      
    );
  }
}

export default App;
