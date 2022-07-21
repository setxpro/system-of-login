import { ReactNode, useState } from 'react';
import { useApi } from '../Hooks/useApi';
import { User } from '../Types/User';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}:{children:ReactNode}) => {

    const api = useApi();

    const [user, setUser] = useState<User | null>(null);

    const signIn = async (email: string, password: string) => {
        const data = await api.signIn(email, password);

        if (data.user) {
            setUser(data.user);
            return true;
        }
        return false
    }

    const signOut = async() => {
        setUser(null);
        await api.signOut();
    }

    const getUserById = async () => {
        const data = await api.getUserById();
        return setUser(data);
    }

    return <AuthContext.Provider value={{ user, signIn, signOut, getUserById }}>{children}</AuthContext.Provider>
}

export default AuthProvider;