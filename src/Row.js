import React from 'react';
import Button from './Button';

const Row = (props) => {
    const buttonDivs = props.buttons.map(
        (button) => {
            return (
                <div className={`col-md-${props.buttonsPerRow + 1}`} key={button.title}><Button text={button.title}/></div>
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

export default Row;