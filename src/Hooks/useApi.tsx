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
            const { data: {data: dados} } = await api.post('/auth/signin', {
                email, password 
            })
            return dados;
       } catch (error) {
           console.log(error)
       }
    },
    signOut: async () => {
        const { data } = await axios.post('/logout');
          return  { status: true, data } // FAKE
    },
})