import React, { Component } from 'react';
import '../login/login.css';
class Forgot extends Component {

    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-column">                    
                    <div className="inner-addon left-addon">
                        <i className="icon-inside fa fa-envelope"></i>
                        <input type="text" className="form-control" placeholder="Email" />
                    </div>                   
                    <div className="d-flex justify-content-around padding-top">
                    <button type="button" className="btn bt-success">Request</button>   
                    <button type="button" className="btn bt-cancel">Cancel</button>                  
                    </div>
                    <div className="d-flex justify-content-around padding-top">
                    <label className="link">Back to Login ?</label>  
                    </div>
                </div>             

            </div>
        );
    }
}
export default Forgot;