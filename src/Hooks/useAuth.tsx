import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}