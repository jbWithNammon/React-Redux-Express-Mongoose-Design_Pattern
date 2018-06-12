import React, { Component } from 'react';
//import '../login/login.css';
// import $ from 'jquery';
// import ReactDOM from 'react-dom';

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion/dist/es';

import './accordion.css';
class AccordionComponent extends Component {

    // constructor(props) {
    //     super(props);

    // }
    render() {
        return (
            <div className="d-flex justify-content-around">
                <div className="demo-container">
                    <h2>Default settings</h2>

                    <Accordion>
                    <AccordionItem>
                            <AccordionItemTitle>
                                <h3 className="u-position-relative">
                                    Accessible Accordion
                        <div className="accordion__arrow" role="presentation" />
                                </h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p>
                                    route4
                    </p>
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3 className="u-position-relative">
                                    Accessible Accordion
                        <div className="accordion__arrow" role="presentation" />
                                </h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p>
                                    route5
                    </p>
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3 className="u-position-relative">
                                    Accessible Accordion
                        <div className="accordion__arrow" role="presentation" />
                                </h3>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p>
                                    route1
                    </p>
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem className="accordion__item">
                            <AccordionItemTitle>
                                <h3 className=" u-position-relative u-margin-bottom-s">
                                    Components
                        <div className="accordion__arrow" role="presentation" />
                                </h3>
                                <div>See all the components from this package</div>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                            route2
                            </AccordionItemBody>
                        </AccordionItem>
                    </Accordion>
                    
                </div> 
            </div >
        );
    }
}
export default AccordionComponent;