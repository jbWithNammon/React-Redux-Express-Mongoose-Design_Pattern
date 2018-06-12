import React, { Component } from 'react';
import '../login/login.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import * as service from '../authService';
class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '', email: '', password: '', rePassword: ''
            // userName: 'user', email: 'eamil', password: '1234', rePassword: '1234'
        };
        this.getRegister = this.getRegister.bind(this);        
        this.setClearInput = this.setClearInput.bind(this); 
        this.getBackToLogin = this.getBackToLogin.bind(this);
    }

    TodoList = ({ filteredTodos, actions }) => (    
        <h1>filteredTodos</h1>
      )
    createNotification = (type, msg) => {

        switch (type) {
            case 'info':
                NotificationManager.info('Info message');
                break;
            case 'success':
                NotificationManager.success('Success message', 'Title here');
                break;
            case 'warning':
                NotificationManager.warning('Warning message', msg, 3000);
                break;
            case 'error':
                NotificationManager.error('Error message', 'Click me!', 5000, () => {
                    alert('callback');
                });
                break;
        }

    };
    inputChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    getRegister() {
        console.log('props',this.props.on)
        
        let errMsg;
        let self = this;
        let data = { name: this.state.userName, password: this.state.userName, email: this.state.email };
        this.getValidate().then((res) => {
            service.setRegister(data).then((res) => {
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
    setClearInput() {
        this.setState({
            userName: '', email: '', password: '', rePassword: ''
        });
    }
    getBackToLogin(){
        this.props.history.push('/login');
    }
    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-column">
                    <div className="inner-addon left-addon">
                        <i className="icon-inside fa fa-user"></i>
                        <input type="text" value={this.state.userName} onChange={e => this.inputChangeHandler(e)} name="userName" className="form-control" placeholder="User Name" />
                    </div>
                    <div className="inner-addon left-addon">
                        <i className="icon-inside fa fa-envelope"></i>
                        <input type="Email" value={this.state.email} onChange={e => this.inputChangeHandler(e)} name="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="inner-addon left-addon">
                        <i className="icon-inside fa fa-lock"></i>
                        <input type="password" value={this.state.password} onChange={e => this.inputChangeHandler(e)} name="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="inner-addon left-addon">
                        <i className="icon-inside fa fa-lock"></i>
                        <input type="password" value={this.state.rePassword} onChange={e => this.inputChangeHandler(e)} name="rePassword" className="form-control" placeholder="Re-type Password" />
                    </div>
                    <div className="d-flex justify-content-around padding-top">
                        <button type="button" onClick={this.getRegister} className="btn bt-success">SignUp</button>
                        <button type="button" onClick={this.setClearInput} className="btn bt-cancel">Cancel</button>
                    </div>
                    <div className="d-flex justify-content-around padding-top">
                        <label className="link" onClick={this.getBackToLogin} >Back to Login ?</label>
                    </div>
                    <NotificationContainer />
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
export default Register;