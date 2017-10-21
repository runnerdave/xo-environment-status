
import Timer from './Timer';
import React, {Component} from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUp: true,
            text: props.text,
            timerValue: '',
            downTimeEvents: []
        }
    }

    timer() {
        return (
            <Timer start = {Date.now()}/>
        )
    }

    handleClick() {
        let timerValue = '';
        let downTimeEvents = this.state.downTimeEvents;
        if (this.state.isUp) {
            timerValue = this.timer();
            downTimeEvents.push(new Date().toLocaleTimeString());
        }
        this.setState({
            isUp: !this.state.isUp,
            timerValue: timerValue,
            downTimeEvents: downTimeEvents
        })
    }

    handleHover() {
        const downTimeHistory = this.state.downTimeEvents;
        if (downTimeHistory.length > 0) {
            console.log(downTimeHistory);
        }
    }

    render() {
        return <button className={`btn btn-${this.state.isUp ? 'success' : 'danger'} btn-block`}
                       onClick={() => this.handleClick()}
                       onMouseOver={() => this.handleHover()}>
            {this.state.text} {this.state.timerValue}
        </button>
    }
}

export default Button;