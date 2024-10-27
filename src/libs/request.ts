import axios from "axios";

const myAxios = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 5000,
    withCredentials: true,
})

//创建拦截器
myAxios.interceptors.request.use(
    function (config){
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
)
myAxios.interceptors.response.use(
    function (response){
        const  { data } = response.data;
        //未登录校验码
        if (data.code == 40100) {
            //如果不是用户信息接口或者不是登录接口 跳转到登录页面
            if (!response.request.responseURL.includes("user/get/login") && !window.location.pathname.includes("/user/login")) {
                window.location.href  = `user/login?redirect=${window.location.href}`
            }
        }else if (data.code == 0){
            throw new Error(data.message ?? "服务器错误");
        }
        return data;
    },
    //如果不是2xx
    function (error) {
        return Promise.reject(error);
    }
)

export default myAxios;
