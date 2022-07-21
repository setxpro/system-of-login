import { useAuth } from "../Hooks/useAuth";
import Login from "../Screens/Login";

const RequireAuth = ( { children }:{ children: JSX.Element } ) => {

    const auth = useAuth();

    if (!auth.user) {
        return <Login/>
    }

    return children 
}

export default RequireAuth;