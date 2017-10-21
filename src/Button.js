import Timer from './Timer';
import React, {Component} from 'react';

const HistoryBlurb = (props) => {
    const downtimeEvents = props.history.map(downtimeEvent => {
        return <li key={downtimeEvent.valueOf()}>{downtimeEvent}</li>
    });

    return (
        <ul>
            {downtimeEvents}
        </ul>
    );
};

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUp: true,
            text: props.text,
            timerValue: '',
            downTimeEvents: [],
            showHistory: false
        }
    }

    static timer() {
        return (
            <Timer start={Date.now()}/>
        )
    }

    handleClick() {
        let timerValue = '';
        let downTimeEvents = this.state.downTimeEvents;
        if (this.state.isUp) {
            timerValue = Button.timer();
            downTimeEvents.push(new Date().toLocaleTimeString());
        }
        this.setState({
            isUp: !this.state.isUp,
            timerValue: timerValue,
            downTimeEvents: downTimeEvents
        })
    }

    handleHoverOver() {
        const downTimeHistory = this.state.downTimeEvents;
        if (downTimeHistory.length > 0) {
            this.setState({showHistory: true})
        }
    }

    handleHoverOut() {
        if(this.state.showHistory) {
            this.setState({showHistory: false})
        }
    }

    render() {
        return (<div>
            <button className={`btn btn-${this.state.isUp ? 'success' : 'danger'} btn-block`}
                    onClick={() => this.handleClick()}
                    onMouseOver={() => this.handleHoverOver()}
                    onMouseLeave={() => this.handleHoverOut()}>
                {this.state.text} {this.state.timerValue}
            </button>
            <div className={` ${this.state.showHistory ? 'button-hover-history' : 'hidden'}`}>
                <HistoryBlurb history={this.state.downTimeEvents}/>
            </div>
        </div>)
    }
}

export default Button;