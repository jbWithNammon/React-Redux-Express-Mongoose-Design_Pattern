import * as axios from '../service/http/httpservice'
// import { Observable } from 'rxjs';

export const getLogin = (data) => {    
    let url = 'login';
    var promise = new Promise(function(resolve, reject) { 
        resolve(axios.httpPost(url));
     });
    return  promise;   
};
export const setRegister = (data) => {    
    let url = 'register';
    var promise = new Promise(function(resolve, reject) {        
        resolve(axios.httpPost(url,data));
     });
    return  promise;   
};


export const hello1 = () => {return "say hello555";}


export function getTest(param){
    return param;
}