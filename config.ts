import dotenv from 'dotenv';
import a from 'axios';
//Variables de entorno
dotenv.config();
//Axios
const axios = a.create({
    baseURL:process.env.URL!,
    timeout:2000
})

export default axios;