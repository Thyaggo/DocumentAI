import axios from 'axios'
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs'
import { useContext } from 'react'
import { MyContext } from '../Context';


const baseURL = process.env.BASE_URL


export default useAxios = () => {
    const {token, setUser, setToken} = useContext(MyContext)

    const axiosInstance = axios.create({
        baseURL,
        headers:{Authorization: `JWT ${token?.access}`}
    });


    axiosInstance.interceptors.request.use(async req => {
    
        const user = jwt_decode(token?.access)
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    
        if(!isExpired) return req
    
        const response = await axios.post(`api/token/refresh/`, {
            refresh: token.refresh
          });
    
        localStorage.setItem('token', JSON.stringify(response.data))
        
        setToken(response.data)
        setUser(jwt_decode(response.data.access))
        
        req.headers.Authorization = `JWT ${response.data.access}`
        return req
    })
    
    return axiosInstance
}