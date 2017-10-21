import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

const buttons = [
    ["OBDX SIT1", "OBDX SIT4"],
    ["DCO SIT1", "DCO SIT4"],
    ["DOCTA SIT1", "DOCTA SIT4"]
];

const Footer = () => {
    return (
        <footer className="app-footer">
            <img src={logo} className="app-logo" alt="logo"/>
            <h1 className="app-title">Powered by React</h1>
        </footer>
    )
};

const Row = (props) => {
    const buttonDivs = props.buttons.map(
        (button) => {
            return (
                <div className="col-md-4" key={button}><Button text={button}/></div>
            )
        }
    );

    return (
        <div className="row">
            <div className="col-md-2"/>
            {buttonDivs}
            <div className="col-md-2"/>
        </div>
    )
};

const SpacerRow = () => {
    return (
        <div className="row">
            <div className="col-md-12 row-spacer"/>
        </div>
    )
};


class App extends Component {

    render() {
        return (
            <div className="app">
                <div className="jumbotron" style={{height: '100vh'}}>
                    <div className="container-fluid">
                        {
                            buttons.map(
                                (button) => {
                                    return (
                                        <div key={button.toString().split(' ')[0]}>
                                            <Row buttons={button}/>
                                            <SpacerRow/>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
