import React, {Component} from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elapsed: 0
        };
    }

    componentDidMount() {
        // componentDidMount is called by react when the component
        // has been rendered on the page. We can set the interval here:

        //this.timer = setInterval(this.tick.bind(this), 50); //or
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        // This method is called immediately before the component is removed
        // from the page and destroyed. We can clear the interval here:

        clearInterval(this.timer);
    }

    tick() {
        // This function is called every X ms. It updates the
        // elapsed counter. Calling setState causes the component to be re-rendered

        this.setState({
            elapsed: new Date() - this.props.start
        });

    }

    toHHMMSS = function (input) {
        let sec_num = parseInt(input, 10); // don't forget the second param
        let hours   = Math.floor(sec_num / 3600);
        let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        let seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return hours+':'+minutes+':'+seconds;
    }

    render() {
        let elapsed = Math.round(this.state.elapsed / 100);

        // This will give a number with one digit after the decimal dot (xx.x):
        let seconds = (elapsed / 10).toFixed(0);

        // Although we return an entire <span> element, react will smartly update
        // only the changed parts, which contain the seconds variable.

        return ( <span> <em>downtime: {this.toHHMMSS(seconds)}</em></span> )
    }
}

export default Timer;