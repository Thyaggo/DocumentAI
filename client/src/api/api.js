import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000',
});

export const getPDF = async (id) => {
    try {
    return await api.get('/files',{
        params: {
            chatroom: id
        }
    });
    } catch (error) {
        console.error("Axios Error:", error);
        throw error;
    }
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

export const getPromt = async (id) => {
    try {
        const response = await api.get('/server/promts',{
            params: {
                chatroom: id
            }
        });
        return response.data;
    } catch (error) {
        console.error("Axios Error:", error);
        throw error;
    }
}

export const getRespond = async (id) => {
    try {
        const response = await api.get('/server/responses',{
        params: {
            chatroom: id
          }
      });
      return response.data;
  } catch (error) {
      console.error("Axios Error:", error);
      throw error;
  }
}


//post the promts to the backend
export const postPrompts = (data) => {
    try {
        const response = api.post('server/promts/', data);
        return response.data;
    } catch (error) {
        console.error("Axios Error:", error);
        throw error;
    }
}

export const postResponses = (data) => {
    try {
        const response = api.post('server/responses/', data);
        return response.data;
    } catch (error) {
        console.error("Axios Error:", error);
        throw error;
    }
}