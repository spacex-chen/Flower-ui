import axios from "axios";
import {ref} from 'vue'
import instance from './filter'

const json = ref("/json")
const http = ref("/api")
export const getBannersJson = () => {
    return axios.get(json.value + "/banners.json")
}

export const getBannersImg = () => {
    return axios.get(http.value + "/Image/GetImages")
}

export const getFlowers = (params: {}) => {
    return axios.post(http.value + "/Flower/GetFlowers", params)
}

export const Register = (params: {}) => {
    return axios.post(http.value + "/Login/Register", params); 
}

export const getToken = (params: {}) => {
    return axios.post(http.value + "/Login/Check", params)
}

//生成一笔订单
export const CreateOrder = (parms: {}) => {
    //在header里携带token访问后端接口
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage["token"];
    return axios.post(http.value + "/Order/CreateOrder", parms);
}

//获取订单列表
export const GetOrder = () => {
    //在header里携带token访问后端接口
    instance.defaults.headers.common['Authorization'] = "Bearer " + localStorage["token"];
    return instance.post(http.value + "/Order/GetOrder");
}