import React from 'react';
import _ from 'lodash';

const InfoPanel = (props) => {
    return (
        <div className={'panel panel-info'}>
            <div className={'panel-heading'}>{props.title}</div>
            <div className={'panel-body'}>
                <ul>
                    {props.content.map((line) => {
                        return (
                            <li key={_.uniqueId("prefix-")}>{line}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
};

export default InfoPanel;