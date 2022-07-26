import { createContext } from "react";
import { User } from "../Types/User"

type AuthContextType = {
    user: User | null;
    message: string;
    getUserById: () => void;
    signIn: (email:string, password:string) => Promise<boolean>;
    signOut: () => void;
    updatePass: (password: string) => Promise<any>;
}
export const AuthContext = createContext<AuthContextType>(null!);