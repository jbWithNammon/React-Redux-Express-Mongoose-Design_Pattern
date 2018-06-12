import React, { Component } from 'react';
import './login.css';
import * as service from '../authService';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '', password: ''
            // userName: 'user', password: '1234'
        };
        this.getRegister = this.getRegister.bind(this);
        this.getForgot = this.getForgot.bind(this);
    }
    inputChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    getRegister() {
        this.props.history.push('/register');  
        //   console.log(getTest("hello")); 
        // let data = { name: 'Nick Cerminara', password: 'password' };
        // service.getLogin(data).then((res) => {
        //     console.log(res);
        // }).catch((err) => {
        //     console.log(err);
        // });
        //    service.hello();
        //     console.log(service.hello1());
    }
    getForgot() {
        this.props.history.push('/forgot');
    }
    getLogin(){
        let errMsg;
        let self = this;
        let data = { name: this.state.userName, password: this.state.userName};
        this.getValidate().then((res) => {
            service.getLogin(data).then((res) => {
                if(res.data){
                    this.props.history.push('/login'); 
                }
            }).catch((err) => {
                self.createNotification('warning', err);
            });
        }).catch((err) => {
            console.log(err);
            self.createNotification('warning', err);
        });
    }
    getValidate() {
        let self = this;
        let msg = '';
        var promise = new Promise(function (resolve, reject) {
            if (self.state.userName === '')
                msg = msg.concat("User Name,");
            if (self.state.email === '')
                msg = msg.concat("Email,");
            if (self.state.password === '')
                msg = msg.concat("Password,");
            if (self.state.rePassword === '')
                msg = msg.concat("Re-Type Password,");
            if (self.state.password !== self.state.rePassword)
                msg = msg.concat("Password not match,");
            if (msg === '') {
                resolve(true);
            } else {
                msg = msg.slice(0, -1);
                reject(msg);
            }
        });
        return promise;
    }
    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-column">
                    <div className="inner-addon left-addon">
                        <i className="icon-inside fa fa-user"></i>
                        <input type="text" className="form-control"  name="userName" onChange={e => this.inputChangeHandler(e)} placeholder="User Name" />
                    </div>
                    <div className="inner-addon left-addon">
                        <i className="icon-inside fa fa-lock"></i>
                        <input type="password" className="form-control" name="password" onChange={e => this.inputChangeHandler(e)} placeholder="Password" />
                    </div>
                    <div className="d-flex justify-content-around padding-top">
                        <button type="button" className="btn bt-success btn-width">Login</button>
                    </div>
                    <div className="d-flex justify-content-around padding-top">
                        <label className="link" onClick={this.getRegister}>SignUp ?</label>
                        <label className="link" onClick={this.getForgot}>Forgot password ?</label>
                    </div>                    
                </div>



                {/* <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><icons.MdPerson /></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div> */}

            </div>
        );
    }
}
export default Login;

