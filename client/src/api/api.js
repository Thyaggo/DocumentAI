import {AuthAxios} from "./Auth";
const api = AuthAxios();

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

export const postChatroom = async (data) => {
    try {
        const response = await api.post('/server/chatrooms/', data);
        return response.data;
    } catch (error) {
        console.error("Axios Error:", error);
        throw error;
    }
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

export const loginUser = (data) => {
    try {
        const response = api.post('auth/jwt/create/', data);
        return response;
    } catch (error) {
        console.error("Axios Error:", error);
        throw error;
    }
}

export const updateToken = (refreshToken) => {
    try {
        const response = api.post('auth/jwt/refresh/',{refresh:refreshToken});
        return response;
    } catch (error) {
        console.error("Axios Error:", error);
        throw error;
    }
}

export const registerUser = (data) => {
    try {
        const customHeaders = {
            ...api.defaults.headers, // Copia los encabezados predeterminados
            'Authorization': undefined // Elimina la autorización de los encabezados
        };

        const response = axios.post('http://localhost:8000/auth/users/', data, {
            headers: customHeaders
        });
        return response;
    } catch (error) {
        console.error("Axios Error:", error);
        throw error;
    }
}
