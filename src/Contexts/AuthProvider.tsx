import { ReactNode, useState } from 'react';
import { useApi } from '../Hooks/useApi';
import { User } from '../Types/User';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}:{children:ReactNode}) => {

    const api = useApi();
    const [user, setUser] = useState<User | null>(null);

    const [message, setMessage] = useState('');

    const signIn = (async (email: string, password: string) => {
        const data = await api.signIn(email, password);

            const msg = data.message;
            const auth = data.data.user;

            if (msg) 
                setMessage(msg);
                
            if (auth) {
                setUser(auth);
                return true;
            }
        return false
    });

    const signOut = async() => {
        setUser(null);
    }

    const updatePass = async (password: string) => {
        const update = await api.updatePass(password);
        return update;
    }

    const getUserById = async () => {
        const data = await api.getUserById();
        return setUser(data);
    }

    return <AuthContext.Provider value={{ user, signIn, signOut, getUserById, message, updatePass }}>{children}</AuthContext.Provider>
}

export default AuthProvider;