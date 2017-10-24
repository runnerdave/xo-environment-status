import React from 'react';

const HistoryBlurb = (props) => {

    const formatDowntimeHistoryEvent = (event) => {
        return (event instanceof Date) ? `Down at: ${event.toLocaleString()}` : event;
    };

    const downtimeEvents = props.history.map(downtimeEvent => {
        return <li key={downtimeEvent.valueOf()}>{formatDowntimeHistoryEvent(downtimeEvent)}</li>
    });

    return (
        <ul>
            {downtimeEvents}
        </ul>
    );
};

export default HistoryBlurb;