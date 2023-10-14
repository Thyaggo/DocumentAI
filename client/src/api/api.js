import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000',
});

export const getPDF = () => {
    return api.get('/files');
}

export const postPDF = (data) => {
    try {
        const response = api.post('/files/', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error("Axios Error:", error);
        throw error;
    }
}

export const getChatrooms = async () => {
    const response = await api.get('/server/chatrooms');
    return response;
}

//post the promts to the backend
export const postPrompts = (data) => {
    try {
        const response = api.post('servers/prompts/', data);
        return response.data;
    } catch (error) {
        console.error("Axios Error:", error);
        throw error;
    }
}