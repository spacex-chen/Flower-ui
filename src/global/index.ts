import { ref } from 'vue'
const RequestUrl = ref("/api"); 
const RequestJson = ref("/json");
const guid = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
const oriVaildImages = ref(RequestUrl.value + "/Login/GetValidateCodeImages?t=");
const FormatToken = (res: string) => {
    return decodeURIComponent(escape(window.atob(res.replace("-", "+").replace("_", "/").split('.')[1])));
}
export {
    RequestUrl, RequestJson, oriVaildImages, guid, FormatToken
}