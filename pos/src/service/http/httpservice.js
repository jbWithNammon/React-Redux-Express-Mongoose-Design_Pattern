import axios from 'axios'
var headers = {
    'Content-Type': 'application/json'
}
// let options = new RequestOptions({
//     headers: headers
// });
let axiosConfig;
const init = () =>{
    let token='*';
    if(localStorage.getItem('token') != undefined){
        token = localStorage.getItem('token');
    }
    axiosConfig  = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "x-access-token": `${token}`,
        }
    };
}
let api = 'http://localhost:8080/api/';
export function httpPost(url, data) {
    this.init;
    url = `${api}${url}`;
    var promise = new Promise(function (resolve, reject) {
        axios.post(url, data, axiosConfig).then(function (res) {
            resolve(res);
        }).catch(function (err) {
            reject(err);
        });
    });
    return promise;
}
export function httpGet(url) {
    this.init;
    url = `${api}${url}`;
    var promise = new Promise(function (resolve, reject) {
        axios.get(url, axiosConfig).then(function (res) {
            resolve(res);
        }).catch(function (err) {
            reject(err);
        });
    });
    return promise;
}
export function getTest(param) {
    return param;
    // localStorage.setItem('state', 'off');
    // localStorage.getItem('');
    // sessionStorage.setItem('','');
    // sessionStorage.getItem('');
}

