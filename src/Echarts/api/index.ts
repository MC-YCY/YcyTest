import axios from "axios";
export const getEchartsLibraries = () =>{
    // https://registry.npmmirror.com/-/v1/search?text=echarts&size=1
    return axios({
        method:'get',
        url:'https://registry.npmmirror.com/-/v1/search?text=echarts&size=1'
    })
}
