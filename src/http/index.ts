import axios from "axios";
import {ref} from 'vue'

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