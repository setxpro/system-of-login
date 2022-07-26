import axios from 'axios';

const api = axios.create({
   baseURL: 'https://rhexpert-api.herokuapp.com'
});

export const useApi = () => ({
    
    getUserById: async() => {
        const {  data: {data: dados} } = await api.get('/user');
        return dados;
    },
    signIn: async (email: string, password:string) => {
        try {
            const { data } = await api.post('/auth/signin', {
                email, password 
            })
            return data;
        } catch (error) {
            return console.log(error)
        }
    },
    signOut: async () => {
        const { data } = await axios.post('/logout');
          return  { status: true, data } // FAKE
    },
    updatePass: async (password:string) => {
        const { data } = await axios.put('/update', { password });
        return  data
    }
})