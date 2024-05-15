import axios from "axios";
// import {useLayoutStore} from "~/store/layout";

export default defineNuxtPlugin((NuxtApp) => {

    // const layoutStore = useLayoutStore();

    // if (process.client) {
    //     if (localStorage.getItem("token")) {
    //         layoutStore.isAuth = true;
    //     }else {
    //         layoutStore.isAuth = false;
    //     }
    // }

    axios.defaults.baseURL = 'http://202.133.88.224:8002/api/'
    axios.defaults.withCredentials = false;
    axios.defaults.proxyHeaders = false;
    // if(process.client){
    //     const token = window.localStorage.getItem('token');
    //     if(token){
    //         console.log("Token is in Header")
    //         axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    //         var flag = true;
    //     }
    // }
    return {
        provide: {
            axios: axios
        },
    }
})