import axios from 'axios';

const api = axios.create({
   baseURL: 'http://187.0.198.166:1259/rest'
});

export const useApi = () => ({
    
    getUserById: async() => {
        const {  data: {data: dados} } = await api.get('/user');
        return dados;
    },
    signIn: async (login: string, senha:string) => {
        try {
            const {  data: {data: dados} } = await api.post('/PSSLOGIN', {
                login, senha 
            })
             return dados;
        } catch (error) {
            return console.log(error)
        }
    },
    updatePass: async (senha:string) => {
        const { data } = await axios.put('/update', { senha });
        return  data
    }
})