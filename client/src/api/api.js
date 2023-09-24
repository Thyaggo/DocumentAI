import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000',
});

export const getPDF = () => {
    return api.get('/files');
}

export const postPDF = (data) => {
    const response = api.post('/files/', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
}
