import axios from 'axios';

const token = 'f203b0aa79ecad84f2736f515cde025c6a22df3e9cc9893102fd4bbf52257fcd7f446f63bfda95068308a92ec0a4d33e6c04df4d6e1c23341046589031d398d6dd1a99dbbee63d0cdd0b739a97d767cdb8355f8ab4cfdc36894ace317db1b59c94b2eed00ab5e6efb90bf66aa63c538de569ca85961190be3a330381530276bf'

const instance = axios.create({
    baseURL: "http://localhost:1337/api",
    headers: {
        "Authorization": `Bearer ${token}`
    }
});

export function getPosts() {
    return instance.get('/blogs');
}