import React, {Component} from 'react';
import _ from 'lodash';
import './App.css';
import data from './applicationData.json';
import Row from './Row';
import Footer from './Footer';
import InfoPanel from './InfoPanel';

const BUTTONS_PER_ROW = 2;

const SpacerRow = () => {
    return (
        <div className="row">
            <div className="col-md-12 row-spacer"/>
        </div>
    )
};

class App extends Component {

    constructor(props) {
        super(props);
        let panelArray = data["panels"];
        let itemBase = _.find(panelArray, (o) => o.base);
        this.state = {
            buttonRows: data['buttons'],
            basePanelTitle: _.get(itemBase, 'base.title'),
            basePanelContent: _.get(itemBase, 'base.blurb'),
            footerContent: data['footer']
        };

    }

    render() {
        return (
            <div className="app">
                <div className="jumbotron" style={{height: '100vh'}}>
                    <div className="container-fluid">
                        <InfoPanel title={this.state.basePanelTitle} content={this.state.basePanelContent}/>
                        {
                            getRows(this.state.buttonRows, BUTTONS_PER_ROW).map(
                                (row) => {
                                    return (
                                        <div key={row[0].title.toString().split(' ')[0]}>
                                            <Row buttons={row} buttonsPerRow={BUTTONS_PER_ROW}/>
                                            <SpacerRow/>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
                <Footer title={this.state.footerContent}/>
            </div>
        );
    }
}

/**
 * Organizes rows of buttons.
 */
export function getRows(list, buttonsPerRow) {
    let matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % buttonsPerRow === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }

    return matrix;
}



export default App;
