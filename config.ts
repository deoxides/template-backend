import dotenv from 'dotenv';
import a from 'axios';
//Variables de entorno
dotenv.config();
//Axios
const axios = a.create({
    baseURL:process.env.URL!,
    // proxy:{
    //     host:process.env.URL!,
    //     port:8081,
    // }
})

export default axios;