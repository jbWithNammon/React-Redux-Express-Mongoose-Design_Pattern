import React, { Component } from 'react';
//import '../login/login.css';
// import $ from 'jquery';
// import ReactDOM from 'react-dom';
import AccordionComponent from '../shared/component/accordion/accordion'

// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemTitle,
//     AccordionItemBody,
// } from 'react-accessible-accordion/dist/es';

import './customer.css';
class Customer extends Component {

    // constructor(props) {
    //     super(props);

    // }
    render() {
        return (
            <div className="d-flex justify-content-around">
                
                <AccordionComponent />
            </div >
        );
    }
}
export default Customer;