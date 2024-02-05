import axios from "axios";
export const getEchartsLibraries = () =>{
    return axios({
        method:'get',
        url:'https://api.cdnjs.com/libraries/echarts'
    })
}