
import axios from 'axios';
import configSv from "./amConfigSv";

export default {
    obj: {
        title: 'Error!',
        message: '에러났어용',
        type: 'error',
        isConfirm: false
    },
    req: {
        method: '',
        url: '',
        data: '',
        token: null,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Authorization',
            'Authorization' : ''
        }
    },
    get(url) {
        this.req.method = "GET";
        this.req.url = url;
        return this.ajax(this.req)
    },
    delete(url, data) {
        this.req.method = "DELETE";
        this.req.data = data;
        this.req.url = url;
        return this.ajax(this.req)
    },
    post(url, data) {
        this.req.method = "POST";
        this.req.data = data;
        this.req.url = url;
        return this.ajax(this.req)
    },
    put(url, data) {
        this.req.method = "PUT";
        this.req.data = data;
        this.req.url = url;
        return this.ajax(this.req)
    },
    login (url, data){
        this.req.method = "POST";
        this.req.data = data;
        this.req.url = url;
        return this.ajaxLogin(this.req)
    },


    errorLoginDirect(error) {
        const err = String(error);
        const url = String(window.location.href);
        if (err.indexOf("401") > -1 && url.indexOf("/login") === -1) {
            localStorage.setItem('adminToken', null);
            window.location.href = "/login";
            return false;
        } else if (err.indexOf("401") > -1 && url.indexOf("/login") > -1) {
            alert("아이디와 비밀번호를 확인 해주세요.");
        }
    },
    errorDirect(error) {
          const err = String(error);
          const url = String(window.location.href);
          if (err.indexOf("Network Error") > -1 && url.indexOf("/login") === -1) {
              localStorage.setItem('adminToken', null);
              window.location.href = "/login";
              return false;
          } else if (err.indexOf("Network Error") > -1 && url.indexOf("/login") > -1) {
              alert("아이디와 비밀번호를 확인 해주세요.");
          }
      },

    ajax(req) {

        axios.defaults.headers = req.headers;
        axios.defaults.timeout = 5000;
        axios.defaults.headers['Authorization'] = "Bearer " + localStorage.getItem("adminToken");

        if ('GET' === req.method) {
            return new Promise((resolve, reject) => {
                axios.get(configSv.url[process.env.NODE_ENV] + req.url)
                    .then((response) => {
                        if (!response.data.state && response.data.message) {
                            this.obj.message = response.data.message;
                            alert(this.obj.message)
                        }

                        if (response.data && response.data.state)
                            resolve(response);
                        else
                            reject(response)
                    }).catch(error => {
                    this.errorDirect(error)
                    //Vue.bus.emit('showAlert', 'alert', this.obj)
                })
            })
        } else {
            return new Promise((resolve, reject) => {
                axios[req.method.toLowerCase()](configSv.url[process.env.NODE_ENV] + req.url, req.data)
                    .then((response) => {
                        if (!response.data.state && response.data.message) {
                            this.obj.message = response.data.message;
                            alert(this.obj.message);
                        }
                        if (response.data.state)
                            resolve(response);
                        else
                            reject(response)

                    }).catch(error => {
                    console.log("error==",error);
                    this.errorDirect(error)
                })
            })
        }
    },
    ajaxLogin (req) {

        axios.defaults.headers = req.headers;
        axios.defaults.timeout = 5000;
        axios.defaults.headers['Authorization'] = "Bearer " + localStorage.getItem("adminToken");

        return new Promise((resolve, reject) => {
            axios[req.method.toLowerCase()](configSv.url[process.env.NODE_ENV] + req.url, req.data)
                .then((response) => {
                    if (!response.data.state && response.data.message) {
                        this.obj.message = response.data.message;
                        alert(this.obj.message);
                    }
                    if (response.data.state)
                        resolve(response);
                    else
                        reject(response)
                }).catch(error => {
                this.errorLoginDirect(error)
                //Vue.bus.emit('showAlert', 'alert', this.obj)
            })
        });
    }
}
