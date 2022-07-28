import { ReactNode, useState } from 'react';
import { useApi } from '../Hooks/useApi';
import { User } from '../Types/User';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}:{children:ReactNode}) => {

    const api = useApi();
    const [user, setUser] = useState<User | null>(null);

    const [message, setMessage] = useState('');

    const signIn = (async (login: string, senha: string) => {
        const data = await api.signIn(login, senha);

        if (data.user) {
            setUser(data.user);
            return true
        }

        return false
    });

    const signOut = async() => {
        setUser(null);
    }

    const updatePass = async (senha: string) => {
        const update = await api.updatePass(senha);
        return update;
    }

    const getUserById = async () => {
        const data = await api.getUserById();
        return setUser(data);
    }

    return <AuthContext.Provider value={{ user, signIn, signOut, getUserById, message, updatePass }}>{children}</AuthContext.Provider>
}

export default AuthProvider;