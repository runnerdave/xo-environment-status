import Timer from './Timer';
import React, {Component} from 'react';
import HistoryBlurb from './HistoryBlurb';

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
            downTimeEvents.push(new Date());
        } else {
            const lastDownTimeEvent = downTimeEvents[downTimeEvents.length - 1];
            downTimeEvents[downTimeEvents.length - 1] =
                `${lastDownTimeEvent} - outage duration: ${Timer.toHHMMSS(calculateDurationInSeconds(new Date(), lastDownTimeEvent))}`;
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
        if (this.state.showHistory) {
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
            <div className={` ${this.state.showHistory ? 'button-hover-history panel panel-danger' : 'hidden'}`}>
                <div className={'panel-heading'}>{this.props.text}</div>
                <div className={'panel-body'}>
                    <HistoryBlurb history={this.state.downTimeEvents}/>
                </div>
            </div>
        </div>)
    }
}

/**
 * Calculates the duration in seconds between two dates.
 * @param date1
 * @param date2
 * @returns {number}
 */
export function calculateDurationInSeconds(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(timeDiff / 1000);
}

export default Button;