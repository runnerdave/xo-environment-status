import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const buttons = [
                  ["OBDX SIT1", "OBDX SIT4"],
                  ["DCO SIT1", "DCO SIT4"],
                  ["DOCTA SIT1", "DOCTA SIT4"]
                ];

const Footer = () => {
    return (
        <header className="app-footer">
            <img src={logo} className="app-logo" alt="logo"/>
            <h1 className="app-title">Powered by React</h1>
        </header>
    )
}



class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUp: true,
            text: props.text
        }
    }

    timer() {
      const timeDisplay = new Date().toLocaleTimeString();

      return (
          ` has been down since: ${timeDisplay}`
      )
    }

    handleClick() {
        let buttonText = this.state.text;
        if (this.state.isUp) {
            buttonText = this.props.text + this.timer();
        } else {
            buttonText = this.props.text;
        }
        this.setState({
            isUp: !this.state.isUp,
            text: buttonText
        })
    }

    render() {
        return <button className={`btn btn-${this.state.isUp ? 'success' : 'danger'} btn-block`}
                       onClick={() => this.handleClick()}>{this.state.text}</button>
    }
}

const Row = (props) => {
    const buttonDivs = props.buttons.map(
        (button) => {
            return (
                <div className="col-md-4"><Button text={button}/></div>
            )
        }
    );

    return (
        <div className="row">
            <div className="col-md-2"></div>
            {buttonDivs}
            <div className="col-md-2"></div>
        </div>
    )
}

const SpacerRow = () => {
    return (
        <div className="row">
            <div className="col-md-12 row-spacer"></div>
        </div>
    )
}

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="jumbotron" style={{height: '100vh'}}>
                    <div className="container-fluid">
                        <Row buttons={buttons[0]}/>
                        <SpacerRow/>
                        <Row buttons={buttons[1]}/>
                        <SpacerRow/>
                        <Row buttons={buttons[2]}/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
