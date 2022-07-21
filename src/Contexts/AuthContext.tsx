import { createContext } from "react";
import { User } from "../Types/User"

type AuthContextType = {
    user: User | null;
    getUserById: () => void;
    signIn: (email:string, password:string) => Promise<boolean>;
    signOut: () => void;
}
export const AuthContext = createContext<AuthContextType>(null!);