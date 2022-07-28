import { createContext } from "react";
import { User } from "../Types/User"

type AuthContextType = {
    user: User | null;
    message: string;
    getUserById: () => void;
    signIn: (login:string, senha:string) => Promise<boolean>;
    signOut: () => void;
    updatePass: (login: string) => Promise<any>;
}
export const AuthContext = createContext<AuthContextType>(null!);